import React, { useState } from 'react';
import { useEffect } from 'react';
import { Sun, Moon} from 'lucide-react';

type Theme = 'light' | 'dark';

export const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
                &lt;InnovaByte/&gt;
                </h1>
                
                <div className="flex items-center gap-6">
                <ul className="hidden md:flex gap-6 text-slate-600 dark:text-slate-300 font-medium text-sm">
                    {['Inicio', 'Sobre nosotros', 'Proyectos', 'Servicios', 'Stock', 'Contacto'].map((item) => (
                    <li key={item}>
                        <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                        {item}
                        </a>
                    </li>
                    ))}
                </ul>
                
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 transition-transform hover:scale-110 active:scale-95 ring-1 ring-slate-200 dark:ring-slate-700"
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                    </div>
                </div>
            </nav>
        );
    };