<<<<<<< HEAD

import React from 'react';
import {
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const Contacto: React.FC = () => {
  return (
    <section
      id="contacto"
      className="py-24 bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-innova-tech/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IZQUIERDA */}
          <div className="space-y-8">

            <div>
              <h2 className="text-innova-tech font-bold uppercase tracking-widest text-sm mb-4">
                Contacto
              </h2>

              <h3 className="text-4xl md:text-5xl font-black text-innova-dark dark:text-white leading-tight">
                ¿Listo para{" "}
                <span className="text-innova-tech">
                  trabajar juntos?
                </span>
              </h3>

              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Creamos páginas web modernas, realizamos soporte técnico y
                brindamos soluciones informáticas para particulares,
                emprendedores y empresas.
                Contanos tu proyecto y te ayudamos a hacerlo realidad.
              </p>
            </div>

            <div className="space-y-6">

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-green-500">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">
                    WhatsApp
                  </h4>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Respuesta rápida y atención personalizada
                  </p>

                  <a
                    href="https://wa.me/5492923565384?text=Hola,%20tengo%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-innova-tech font-bold hover:underline"
                  >
                    Iniciar conversación
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-innova-tech">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">
                    Ubicación
                  </h4>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Bahía Blanca, Buenos Aires
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-innova-tech">
                  <Clock size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">
                    Atención
                  </h4>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Lunes a Domingo
                  </p>

                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Respondemos durante todo el día
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* DERECHA */}
          <div className="relative">

            <div className="absolute -inset-4 bg-innova-tech/20 rounded-[3rem] blur-2xl -z-10" />

            <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 text-center space-y-8">

              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-3xl flex items-center justify-center mx-auto">
                <MessageCircle size={40} />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-innova-dark dark:text-white mb-2">
                  Contactanos por WhatsApp
                </h4>

                <p className="text-slate-500 dark:text-slate-400">
                  Presupuestos, soporte técnico, desarrollo web
                  y consultas generales.
                </p>
              </div>

              <a
                href="https://wa.me/5492923565384?text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-5 bg-green-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 hover:shadow-green-500/20"
              >
                <MessageCircle size={22} />
                Iniciar conversación
              </a>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 flex items-center justify-center gap-3">
                <CheckCircle2 size={20} className="text-emerald-500" />

                <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                  Respuesta rápida garantizada
                </span>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700">

                <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest font-bold">
                  Nuestras redes
                </p>

                <div className="flex justify-center gap-6">

                  <a
                    href="https://www.instagram.com/innovabyte0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-pink-500 transition-colors transform hover:scale-125"
                  >
                    <Instagram size={30} />
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

=======
import React from 'react';
import { Mail, Send, Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Contacto: React.FC = () => {
    return (
        <section id="contacto" className="py-24 bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500 relative overflow-hidden">
            
            {/* Adorno visual de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-innova-tech/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-innova-tech font-bold uppercase tracking-widest text-sm mb-4">Contacto</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-innova-dark dark:text-white leading-tight">
                                <span className="text-innova-tech">¿Te gusto lo que viste?</span>
                            </h3>
                            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Ya sea para arreglar tu equipo personal o para desarrollar el software de tu emprendimiento, estamos en Bahía Blanca para ayudarte. 
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-innova-tech">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-innova-dark dark:text-white">WhatsApp</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Contestamos al toque</p>
                                    <a href="https://wa.me/5492923565384?text=Hola,%20tengo%20una%20consulta" className="text-innova-tech font-bold hover:underline">Iniciar chat</a>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-innova-tech">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-innova-dark dark:text-white">Ubicación</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Bahía Blanca, Buenos Aires</p>
                                </div>
                            </div>

                            {/* Horarios */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-innova-tech">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-innova-dark dark:text-white">Horarios</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Lunes a Viernes: 08:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-innova-tech/20 rounded-[3rem] blur-2xl -z-10"></div>
                        <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 text-center space-y-8">
                            <div className="w-20 h-20 bg-innova-tech/10 text-innova-tech rounded-3xl flex items-center justify-center mx-auto rotate-3 group-hover:rotate-0 transition-transform">
                                <Mail size={40} />
                            </div>
                            
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-innova-dark dark:text-white">Mandanos un mail</h4>
                                <p className="text-slate-500 dark:text-slate-400">Para consultas formales o presupuestos de software.</p>
                            </div>

                            <a 
                                href="mailto:tuemail@ejemplo.com" 
                                className="inline-flex items-center justify-center gap-3 w-full py-5 bg-innova-dark dark:bg-innova-tech text-white dark:text-innova-dark rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 hover:shadow-innova-tech/20"
                            >
                                <Send size={20} />
                                Enviar Correo
                            </a>

                            <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                                <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest font-bold">Nuestras redes</p>
                                <div className="flex justify-center gap-6">
                                    <a href="https://www.instagram.com/innovabyte0/" className="text-slate-400 hover:text-pink-500 transition-colors transform hover:scale-125">
                                        <Instagram size={28} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
>>>>>>> 6b6e22c9b98138c11f765554a41b1f6e13ed497d
