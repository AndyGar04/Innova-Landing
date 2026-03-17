import { Star, Quote, CheckCircle2, ExternalLink } from 'lucide-react';
import React from 'react';

const testimonios = [
    {
        id: 1,
        nombre: "Sergio Albornoz",
        empresa: "Referente - LLA, Puan",
        texto: "",
        servicio: "Pagina web & Soporte Técnico",
        estrellas: 5,
        linkProyecto: "https://tienda-ejemplo.com"
    },
    {
        id: 2,
        nombre: "Julian Heit",
        empresa: "Emprendedor",
        texto: "",
        servicio: "Pagina Web & Soporte Técnico",
        estrellas: 5,
        linkProyecto: "https://tienda-ejemplo.com"
    },
    {
        id: 3,
        nombre: "Agustin Perez",
        empresa: "Particular",
        texto: "",
        servicio: "Optimización PC",
        estrellas: 5,
        linkProyecto: "https://tienda-ejemplo.com"
    }
];

export const Testimonios: React.FC = () => {
    return (
        <section id="testimonios" className="py-24 bg-white dark:bg-innova-dark-bg transition-colors duration-500 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-innova-tech font-bold uppercase tracking-widest text-sm mb-2">Clientes satisfechos</h2>
                        <h3 className="text-4xl font-black text-innova-dark dark:text-white">Experiencias reales</h3>
                    </div>
                    <div className="flex items-center gap-2 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 size={20} />
                        <span className="font-bold">Google Reviews: 5/5</span>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonios.map((t) => (
                        <div key={t.id} className="break-inside-avoid bg-innova-bg dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:scale-[1.02] transition-transform duration-300 relative group">
                            <Quote className="absolute top-6 right-8 text-innova-tech/20 group-hover:text-innova-tech/40 transition-colors" size={40} />
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.estrellas)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">
                                "{t.texto}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-innova-dark text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    {t.nombre.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-innova-dark dark:text-white">{t.nombre}</h4>
                                    <p className="text-xs text-innova-tech font-semibold uppercase">{t.servicio}</p>
                                </div>
                            </div>

                            {/* EL BOTÓN DINÁMICO */}
                            {t.linkProyecto && (
                                <a 
                                    href={t.linkProyecto}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center justify-center gap-2 py-2 px-4 bg-white dark:bg-slate-700 text-innova-dark dark:text-innova-tech text-xs font-bold rounded-xl border border-innova-dark/10 dark:border-innova-tech/20 hover:bg-innova-tech hover:text-innova-dark transition-all group"
                                >
                                    Ver trabajo realizado
                                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};