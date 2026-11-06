import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

type Theme = 'light' | 'dark';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Persistencia del tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre nosotros', href: '/#sobre-nosotros' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Testimonios', href: '/#testimonios' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Compra/Venta', href: '/compra-venta' },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'border-b border-slate-200 bg-white/85 py-3 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-[#020817]/85'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tight text-[#062c25] dark:text-white"
        >
          <Link to="/">Innova<span className="text-cyan-500">Byte</span></Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isCompraVenta = link.href === '/compra-venta';

              return (
                <li key={link.name} className={`group relative ${isCompraVenta ? 'ml-auto' : ''}`}>
                  {link.href.startsWith('/#') || link.href === '/' ? (
                    <Link
                      to={link.href}
                      className={
                        link.href === '/'
                          ? 'transition-colors duration-300 hover:text-cyan-500'
                          : 'transition-colors duration-300 hover:text-cyan-500'
                      }
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <NavLink
                      to={link.href}
                      className={({ isActive }: { isActive: boolean }) =>
                        `transition-colors duration-300 ${
                          isActive ? 'text-cyan-500' : 'hover:text-cyan-500'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {!isCompraVenta && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="rounded-xl bg-slate-100 p-2.5 text-slate-800 shadow-sm ring-1 ring-slate-200 transition-all hover:scale-105 dark:bg-slate-800 dark:text-yellow-400 dark:ring-slate-700"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a
            href="/#contacto"
            className="rounded-xl bg-cyan-500 px-5 py-2.5 font-bold text-[#062c25] shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
          >
            Contactar
          </a>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-yellow-400"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-800 dark:text-white"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-[#020817] md:hidden"
          >
            <div className="space-y-5 p-6">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-slate-700 transition-colors hover:text-cyan-500 dark:text-slate-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="/#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-cyan-500 py-3 font-bold text-[#062c25]"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};