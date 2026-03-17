import { Instagram, Send } from "lucide-react";

export const Inicio: React.FC = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500">
            
            {/* Orbe de fondo: En modo noche es un brillo turquesa suave */}
            <div className="absolute top-0 right-0 w-1/3 h-screen bg-innova-tech/10 dark:bg-innova-tech/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-8 text-center md:text-left">
                    {/* Tagline: En dark mode le damos un borde turquesa */}
                    <div className="inline-block px-4 py-2 bg-white dark:bg-slate-900 text-innova-dark dark:text-innova-tech rounded-full text-xs font-bold tracking-widest uppercase border border-innova-dark/20 dark:border-innova-tech/30 shadow-sm">
                        Bahía Blanca • InnovaByte
                    </div>
                    
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-innova-dark dark:text-slate-100 leading-tight">
                            Tecnología que <span className="text-innova-tech">impulsa</span> tu crecimiento.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                            En <span className="font-bold text-innova-dark dark:text-innova-tech">InnovaByte</span> resolvemos tus necesidades informáticas.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* Botón Principal: El turquesa resalta mucho más en fondo oscuro */}
                        <a href="#contacto" className="flex items-center gap-2 px-8 py-4 bg-innova-tech hover:bg-innova-tech/90 text-innova-dark rounded-2xl font-extrabold transition-all shadow-lg shadow-innova-tech/20 hover:-translate-y-1 w-full sm:w-auto justify-center">
                            Contactanos <Send size={18} />
                        </a>
                        
                        <a href="https://www.instagram.com/innovabyte0/" target="_blank" className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all w-full sm:w-auto justify-center">
                            <Instagram size={20} /> Instagram
                        </a>
                    </div>
                </div>

                {/* Imagen con resplandor en modo noche */}
                <div className="relative flex justify-center items-center">
                    {/* Este div crea un efecto de "glow" detrás del logo en modo noche */}
                    <div className="absolute inset-0 bg-innova-tech/20 dark:bg-innova-tech/10 blur-[80px] rounded-full"></div>
                    
                    <div className="relative group p-2 bg-innova-dark dark:bg-innova-tech rounded-[3rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden">
                            <img 
                                src="/Logo.png" 
                                alt="InnovaByte" 
                                className="w-full h-auto object-cover dark:opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};