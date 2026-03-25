import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

type Theme = 'light' | 'dark';

export const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Persistencia y aplicación del tema
    useEffect(() => {
        const root = window.document.documentElement;
        theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
    }, [theme]);

    // Efecto de scroll para cambiar el estilo del Navbar
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
        { name: 'Inicio', href: '#inicio' },
        { name: 'Sobre nosotros', href: '#sobre-nosotros' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Stock', href: '#stock' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav 
            className={`fixed w-full z-[100] transition-all duration-500 ${
                isScrolled 
                ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm' 
                : 'py-5 bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                
                {/* LOGO */}
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono tracking-tight"
                >
                    &lt;InnovaByte/&gt;
                </motion.h1>
                
                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8 text-slate-600 dark:text-slate-300 font-medium text-sm">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group">
                                <a 
                                    href={link.href} 
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                                {/* Línea animada al hacer hover */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </li>
                        ))}
                    </ul>
                    
                    {/* TOGGLE THEME */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-all hover:scale-110 active:scale-95 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
                    </button>
                </div>

                {/* MOBILE BUTTONS */}
                <div className="md:hidden flex items-center gap-4">
                    <button 
                        onClick={toggleTheme}
                        className="p-2 text-slate-600 dark:text-yellow-400"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-800 dark:text-white"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DESPLEGABLE */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 md:hidden shadow-xl"
                    >
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};