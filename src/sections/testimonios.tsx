import React from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';

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
  },
  {
    id: 3,
    nombre: 'Edgardo Garcia',
    servicio: 'Optimización de PC',
    texto:
      'Muy conforme con el servicio. Cambiaron la pantalla de mi notebook y quedó funcionando de diez. Buena atención, rapidez y precios razonables.',
  },
  {
    id: 4,
    nombre: 'Matías Straub',
    servicio: 'Optimización de PC',
    texto:
      'Excelente servicio. Me instalaron varios componentes nuevos en la PC y dejaron todo configurado y funcionando perfectamente. Muy profesionales y atentos.',
  },
  {
    id: 5,
    nombre: 'Yami Salcedo',
    servicio: 'Optimización de PC',
    texto:
      'Muy buena atención. Le hicieron mantenimiento y optimización a mi PC, mejorando notablemente la velocidad y el rendimiento general.',
  },
  {
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
      className="bg-white py-24 transition-colors duration-500 dark:bg-innova-dark-bg"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-innova-tech">
            Casos de Éxito
          </p>

          <h2 className="mb-6 text-4xl font-black text-innova-dark dark:text-white md:text-5xl">
            Resultados que hablan por nosotros
          </h2>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-100 px-6 py-3 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
            <CheckCircle2 size={20} />
            <span className="font-bold">100% Clientes Satisfechos</span>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="mb-8 text-3xl font-black text-innova-dark dark:text-white">
            Desarrollo Web
          </h3>

          <div className="grid gap-8 lg:grid-cols-2">
            {proyectosWeb.map((proyecto) => (
              <div
                key={proyecto.id}
                className="overflow-hidden rounded-[2rem] border border-slate-100 bg-innova-bg shadow-xl transition-all duration-300 hover:-translate-y-2 dark:border-slate-700 dark:bg-slate-800"
              >
                <img
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <h4 className="mb-2 text-2xl font-bold text-innova-dark dark:text-white">
                    {proyecto.nombre}
                  </h4>

                  <p className="mb-4 font-semibold text-innova-tech">{proyecto.cliente}</p>

                  <p className="mb-6 italic leading-relaxed text-slate-600 dark:text-slate-400">
                    "{proyecto.texto}"
                  </p>

                  <a
                    href={proyecto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-innova-tech px-6 py-3 font-bold text-innova-dark transition-all hover:scale-105"
                  >
                    Ver proyecto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-3xl font-black text-innova-dark dark:text-white">
            Servicio Técnico
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviciosTecnicos.map((cliente) => (
              <div
                key={cliente.id}
                className="rounded-[2rem] border border-slate-100 bg-innova-bg p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="mb-6 italic leading-relaxed text-slate-600 dark:text-slate-400">
                  "{cliente.texto}"
                </p>

                <div className="mb-6 h-[3px] w-12 rounded-full bg-innova-tech" />

                <h4 className="text-lg font-bold text-innova-dark dark:text-white">
                  {cliente.nombre}
                </h4>

                <p className="mt-1 text-sm font-semibold text-innova-tech">{cliente.servicio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
