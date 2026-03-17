import { Monitor, Wrench, ShieldCheck, Code, Globe, Zap, Cpu } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ icon: Icon, title, desc, tags }: any) => (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 hover:border-innova-tech transition-all group shadow-sm hover:shadow-xl">
        <div className="w-14 h-14 bg-innova-bg dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-innova-tech transition-all">
            <Icon className="text-innova-dark dark:text-innova-tech group-hover:text-innova-dark" size={30} />
        </div>
        <h3 className="text-2xl font-bold text-innova-dark dark:text-white mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {desc}
        </p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs rounded-full font-medium">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export const Servicios: React.FC = () => {
    return (
        <section id="servicios" className="py-24 bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Cabecera de Sección */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-innova-tech font-bold tracking-widest uppercase text-sm">Nuestras especialidades</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-innova-dark dark:text-white leading-tight">
                        Soluciones integrales para un mundo digital.
                    </h3>
                </div>

                {/* HARDWARE & SOPORTE */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
                        <h4 className="flex items-center gap-2 text-xl font-bold text-slate-400 dark:text-slate-500">
                            <Cpu size={24} /> Soporte e Infraestructura
                        </h4>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon={Wrench}
                            title="Reparación & Mantenimiento"
                            desc="Diagnóstico preciso y reparación de PCs y Laptops. Limpieza física y optimización de hardware para máximo rendimiento."
                            tags={['Hardware', 'Limpieza', 'Optimización']}
                        />
                        <ServiceCard 
                            icon={Monitor}
                            title="Sistemas & Software"
                            desc="Instalación de S.O., recuperación de datos y eliminación de malware. Dejamos tu equipo como nuevo."
                            tags={['Windows/Linux', 'Seguridad', 'Backups']}
                        />
                        <ServiceCard 
                            icon={ShieldCheck}
                            title="Soporte IT"
                            desc="Mantenimiento preventivo y correctivo para negocios. Soporte remoto y configuración de redes seguras."
                            tags={['Redes', 'Seguridad', 'Empresas']}
                        />
                    </div>
                </div>

                {/* DESARROLLO DE SOFTWARE */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
                        <h4 className="flex items-center gap-2 text-xl font-bold text-innova-tech">
                            <Code size={24} /> Desarrollo & Software
                        </h4>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceCard 
                            icon={Globe}
                            title="Desarrollo Web a Medida"
                            desc="Landing pages, tiendas online y portfolios profesionales. Diseños modernos, rápidos y adaptados a móviles."
                            tags={['React', 'TypeScript', 'Database']}
                        />
                        <ServiceCard 
                            icon={Zap}
                            title="Sistemas de Gestión"
                            desc="Automatización de procesos internos para tu negocio. Herramientas que te ahorran tiempo y errores manuales."
                            tags={['Software', 'Automatización', 'Database']}
                        />
                    </div>
                </div>
                
            </div>
        </section>
    );
};