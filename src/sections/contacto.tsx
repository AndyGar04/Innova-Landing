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
      className="relative overflow-hidden bg-innova-bg py-24 transition-colors duration-500 dark:bg-innova-dark-bg"
    >
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-innova-tech/5 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-innova-tech">
                Contacto
              </h2>

              <h3 className="text-4xl font-black leading-tight text-innova-dark dark:text-white md:text-5xl">
                ¿Listo para{" "}
                <span className="text-innova-tech">trabajar juntos?</span>
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Creamos páginas web modernas, realizamos soporte técnico y brindamos soluciones
                informáticas para particulares, emprendedores y empresas. Contanos tu proyecto y te
                ayudamos a hacerlo realidad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-3 text-green-500 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <MessageCircle size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">WhatsApp</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Respuesta rápida y atención personalizada
                  </p>
                  <a
                    href="https://wa.me/5492923565384?text=Hola,%20tengo%20una%20consulta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-innova-tech hover:underline"
                  >
                    Iniciar conversación
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-3 text-innova-tech shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">Ubicación</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Bahía Blanca, Buenos Aires
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-100 bg-white p-3 text-innova-tech shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Clock size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-innova-dark dark:text-white">Atención</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Lunes a Domingo</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Respondemos durante todo el día
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-innova-tech/20 blur-2xl" />

            <div className="space-y-8 rounded-[3rem] border border-slate-100 bg-white p-10 text-center shadow-2xl dark:border-slate-700 dark:bg-slate-800">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10 text-green-500">
                <MessageCircle size={40} />
              </div>

              <div>
                <h4 className="mb-2 text-2xl font-bold text-innova-dark dark:text-white">
                  Contactanos por WhatsApp
                </h4>

                <p className="text-slate-500 dark:text-slate-400">
                  Presupuestos, soporte técnico, desarrollo web y consultas generales.
                </p>
              </div>

              <a
                href="https://wa.me/5492923565384?text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 py-5 text-lg font-black text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-green-500/20"
              >
                <MessageCircle size={22} />
                Iniciar conversación
              </a>

              <div className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
                <CheckCircle2 size={20} className="text-emerald-500" />
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                  Respuesta rápida garantizada
                </span>
              </div>

              <div className="border-t border-slate-100 pt-6 dark:border-slate-700">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                  Nuestras redes
                </p>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.instagram.com/innovabyte0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-all hover:scale-125 hover:text-pink-500"
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
