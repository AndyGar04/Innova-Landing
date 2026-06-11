import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import React from 'react';

const proyectosWeb = [
  {
    id: 1,
    nombre: 'LLA Puan',
    cliente: 'Sergio Albornoz',
    texto:
      'La página superó mis expectativas y cualquier duda fue resuelta rápidamente. Se nota el compromiso y la dedicación en cada detalle.',
    imagen: '/Proyectos/LLA-Proyecto.jpg',
    link: 'https://lla-distrito-puan.vercel.app/',
  },
  {
    id: 2,
    nombre: 'Portfolio Julián Heit',
    cliente: 'Julian Heit',
    texto:
      'Una web moderna, rápida y profesional. El soporte fue impecable durante todo el proceso.',
    imagen: '/Proyectos/JulianHeit-Proyecto.jpg',
    link: 'https://portafolio-five-delta-26.vercel.app/',
  },
];

const serviciosTecnicos = [
  {
    id: 1,
    nombre: 'Agustín Pérez',
    servicio: 'Optimización de PC',
    texto:
      'Detectaron y solucionaron el problema rápidamente. Mi computadora quedó funcionando como nueva.',
  },
   {
    id: 2,
    nombre: 'Carlos Vercelino',
    servicio: 'Optimización de PC',
    texto:
      'Muy conforme con el trabajo. Realizaron una limpieza completa de la PC y me ayudaron a recuperar una contraseña que no podía recordar. Servicio rápido y profesional.',
  },   {
    id: 3,
    nombre: 'Edgardo garcia',
    servicio: 'Optimización de PC',
    texto:
      'Muy conforme con el servicio. Cambiaron la pantalla de mi notebook y quedó funcionando de diez. Buena atención, rapidez y precios razonables.',
  }, {
    id: 4,
    nombre: 'Matiias Straub',
    servicio: 'Optimización de PC',
    texto:
      'Excelente servicio. Me instalaron varios componentes nuevos en la PC y dejaron todo configurado y funcionando perfectamente. Muy profesionales y atentos.',
  },{
    id: 5,
    nombre: 'Yami Salcedo',
    servicio: 'Optimización de PC',
    texto:
      'Muy buena atención. Le hicieron mantenimiento y optimización a mi PC, mejorando notablemente la velocidad y el rendimiento general.',
  },{
    id: 6,
    nombre: 'Juan Pedro Kessler',
    servicio: 'Optimización de PC',
    texto:
      'Excelente asesoramiento. Me ayudaron a elegir los componentes adecuados según mi presupuesto y el uso que le iba a dar a la PC. Muy recomendables.',
  },
];

export const Testimonios: React.FC = () => {
  return (
    <section
      id="testimonios"
      className="py-24 bg-white dark:bg-innova-dark-bg transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-innova-tech font-bold uppercase tracking-widest text-sm mb-3">
            Casos de Éxito
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-innova-dark dark:text-white mb-6">
            Resultados que hablan por nosotros
          </h2>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 size={20} />
            <span className="font-bold">
              100% Clientes Satisfechos
            </span>
          </div>
        </div>

        {/* DESARROLLO WEB */}
        <div className="mb-24">
          <h3 className="text-3xl font-black mb-8 text-innova-dark dark:text-white">
             Desarrollo Web
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {proyectosWeb.map((proyecto) => (
              <div
                key={proyecto.id}
                className="bg-innova-bg dark:bg-slate-800 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h4 className="text-2xl font-bold text-innova-dark dark:text-white mb-2">
                    {proyecto.nombre}
                  </h4>

                  <p className="text-innova-tech font-semibold mb-4">
                    {proyecto.cliente}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">
                    "{proyecto.texto}"
                  </p>

                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-innova-tech text-innova-dark font-bold rounded-xl hover:scale-105 transition-all"
                  >
                    Ver proyecto
                    <ExternalLink size={16} />
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIO TÉCNICO */}
        <div>
          <h3 className="text-3xl font-black mb-8 text-innova-dark dark:text-white">
             Servicio Técnico
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {serviciosTecnicos.map((cliente) => (
              <div
                key={cliente.id}
                className="bg-innova-bg dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed mb-6">
                  "{cliente.texto}"
                </p>

                <div className="w-12 h-[3px] bg-innova-tech rounded-full mb-6" />

                <h4 className="font-bold text-lg text-innova-dark dark:text-white">
                  {cliente.nombre}
                </h4>

                <p className="text-innova-tech font-semibold text-sm mt-1">
                  {cliente.servicio}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

