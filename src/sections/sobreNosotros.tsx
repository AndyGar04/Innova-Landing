import { Code, Github, Linkedin, Globe, Users, Target, Rocket } from 'lucide-react';
import React from 'react';

// Componente para la Card de cada socio (para no repetir código)
const SocioCard = ({ nombre, titulo, imagen, github, linkedin, portfolio }: any) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 hover:border-innova-tech transition-all group">
        <div className="relative mb-4">
            <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img src={imagen} alt={nombre} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-innova-tech p-2 rounded-lg text-innova-dark shadow-lg">
                <Code size={16} />
            </div>
        </div>
        <div className="text-center space-y-1">
            <h4 className="text-xl font-bold text-innova-dark dark:text-white">{nombre}</h4>
            <p className="text-sm font-medium text-innova-tech uppercase tracking-wider">{titulo}</p>
        </div>
        <div className="flex justify-center gap-3 mt-6">
            <a href={github} className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-innova-dark hover:text-white transition-colors">
                <Github size={20} />
            </a>
            <a href={linkedin} className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
            </a>
            <a href={portfolio} className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-innova-tech hover:text-innova-dark transition-colors">
                <Globe size={20} />
            </a>
        </div>
    </div>
);

export const SobreNosotros: React.FC = () => {
    return (
        <section id="sobre-nosotros" className="py-24 bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LADO IZQUIERDO: TEXTO ESPECTACULAR */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-innova-tech/10 text-innova-tech rounded-full text-sm font-bold">
                            <Users size={18} />
                            <span>El equipo detrás de InnovaByte</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-innova-dark dark:text-white leading-tight">
                            Sobre nosotros
                        </h2>

                        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg">
                            <p>
                                Somos dos amigos y apasionados de la informática que decidimos unir fuerzas para transformar la realidad tecnológica de nuestra ciudad. En <strong>InnovaByte</strong>, no solo reparamos equipos; construimos soluciones que impulsan el crecimiento de personas y empresas.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-innova-dark dark:text-innova-tech font-bold">
                                        <Target size={20} /> Nuestra Misión
                                    </div>
                                    <p className="text-sm leading-relaxed">Resolver necesidades informáticas con servicios confiables, modernos y cercanos.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-innova-dark dark:text-innova-tech font-bold">
                                        <Rocket size={20} /> Nuestra Visión
                                    </div>
                                    <p className="text-sm leading-relaxed">Ser el referente tecnológico en Bahía Blanca por innovación y transparencia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LADO DERECHO: LAS CARDS DE LOS SOCIOS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SocioCard 
                            nombre="Andy Garcia"
                            titulo="Tecnico en programación e informático"
                            imagen="/Foto-Andy.png" 
                            github="https://github.com/AndyGar04"
                            linkedin="https://www.linkedin.com/in/andy-garcia-programador/"
                            portfolio="https://andy-garcia-portfolio.vercel.app/"
                        />
                        <SocioCard 
                            nombre="Fausto Desch"
                            titulo="Tecnico en programación e informático"
                            imagen="/Fausto-Foto.jfif" 
                            github="https://github.com/Fausto-Desch"
                            linkedin="https://www.linkedin.com/in/fausto-desch-3758a5226/"
                            portfolio="https://github.com/Fausto-Desch"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};