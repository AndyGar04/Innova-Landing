import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQ {
    pregunta: string;
    respuesta: string;
}

const preguntas: FAQ[] = [
    {
        pregunta: "¿Trabajan con particulares y empresas?",
        respuesta:
            "Sí, brindamos soluciones tanto para particulares como para emprendedores, negocios y empresas.",
    },
    {
        pregunta: "¿Realizan mantenimiento de páginas web?",
        respuesta:
            "Sí, ofrecemos soporte, actualizaciones y mantenimiento para mantener tu sitio funcionando correctamente.",
    },
    {
        pregunta: "¿Hacen servicio técnico de computadoras?",
        respuesta:
            "Sí, realizamos diagnóstico, reparación, optimización, instalación de software y mantenimiento general.",
    },
    {
        pregunta: "¿Trabajan de forma remota?",
        respuesta:
            "Sí, muchos servicios pueden realizarse de manera remota, permitiendo una atención rápida y eficiente.",
    },
    {
        pregunta: "¿Cómo solicito un presupuesto?",
        respuesta:
            "Podés contactarnos por WhatsApp o mediante nuestro formulario de contacto. Te responderemos a la brevedad.",
    },
    {
        pregunta: "¿El presupuesto tiene costo?",
        respuesta:
            "No, el presupuesto inicial es totalmente gratuito.",
    },
];

export const FAQ: React.FC = () => {
    return (
        <section
            id="faq"
            className="py-24 bg-white dark:bg-innova-dark-bg transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-innova-tech font-bold uppercase tracking-widest text-sm mb-3">
                        <HelpCircle size={18} />
                        <span>Preguntas Frecuentes</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-innova-dark dark:text-white mb-4">
                        Resolvemos tus dudas
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Encontrá respuestas rápidas a las consultas más comunes sobre nuestros servicios.
                    </p>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid md:grid-cols-2 gap-6">
                    {preguntas.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group
                                p-8
                                rounded-[2rem]
                                bg-innova-bg
                                dark:bg-slate-800/50
                                border
                                border-slate-200
                                dark:border-slate-700
                                hover:border-innova-tech
                                hover:-translate-y-1
                                transition-all
                                duration-300
                            "
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-innova-tech/10 flex items-center justify-center">
                                    <HelpCircle
                                        size={24}
                                        className="text-innova-tech"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-innova-dark dark:text-white mb-3">
                                        {item.pregunta}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.respuesta}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};