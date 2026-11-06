import React from 'react';
import {
  Code,
  Github,
  Linkedin,
  Globe,
  Users,
  Target,
  Rocket,
} from 'lucide-react';

interface SocioCardProps {
  nombre: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

const SocioCard: React.FC<SocioCardProps> = ({
  nombre,
  titulo,
  descripcion,
  imagen,
  github,
  linkedin,
  portfolio,
}) => (
  <div className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-innova-tech dark:border-slate-700 dark:bg-slate-800">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-innova-tech/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

    <div className="relative mb-6">
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg dark:bg-slate-700">
        <img
          src={imagen}
          alt={nombre}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 right-6 rounded-xl bg-innova-tech p-3 text-innova-dark shadow-xl">
        <Code size={18} />
      </div>
    </div>

    <div className="relative space-y-2 text-center">
      <h4 className="text-2xl font-bold text-innova-dark dark:text-white">
        {nombre}
      </h4>
      <p className="text-sm font-bold uppercase tracking-wider text-innova-tech">
        {titulo}
      </p>
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {descripcion}
      </p>
    </div>

    <div className="relative mt-8 flex justify-center gap-3">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-innova-dark hover:text-white dark:bg-slate-700 dark:text-slate-300"
      >
        <Github size={20} />
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white dark:bg-slate-700 dark:text-slate-300"
      >
        <Linkedin size={20} />
      </a>

      <a
        href={portfolio}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-slate-100 p-3 text-slate-600 transition-colors hover:bg-innova-tech hover:text-innova-dark dark:bg-slate-700 dark:text-slate-300"
      >
        <Globe size={20} />
      </a>
    </div>
  </div>
);

export const SobreNosotros: React.FC = () => {
  return (
    <section
      id="sobre-nosotros"
      className="overflow-hidden bg-innova-bg py-24 transition-colors duration-500 dark:bg-innova-dark-bg"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-innova-tech/10 px-4 py-2 text-sm font-bold text-innova-tech">
              <Users size={18} />
              <span>El equipo detrás de InnovaByte</span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-innova-dark dark:text-white md:text-5xl">
              Sobre nosotros
            </h2>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
              <p>
                En <strong>InnovaByte</strong> combinamos experiencia en desarrollo de software,
                soporte técnico y soluciones digitales para ayudar a personas, emprendimientos y
                empresas a potenciar su presencia tecnológica.
              </p>

              <p>
                Nuestro objetivo es brindar soluciones modernas, eficientes y accesibles,
                acompañando a cada cliente desde la idea inicial hasta la implementación final.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-3xl font-black text-innova-tech">20+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Proyectos</p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-3xl font-black text-innova-tech">50+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Clientes</p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <h3 className="text-3xl font-black text-innova-tech">100%</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Compromiso</p>
              </div>
            </div>

            <div className="grid gap-6 pt-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2 font-bold text-innova-dark dark:text-innova-tech">
                  <Target size={20} />
                  Nuestra Misión
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Resolver necesidades informáticas con servicios confiables, modernos y cercanos,
                  adaptados a cada cliente.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-3 flex items-center gap-2 font-bold text-innova-dark dark:text-innova-tech">
                  <Rocket size={20} />
                  Nuestra Visión
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Ser un referente tecnológico en Bahía Blanca, destacándonos por la innovación, la
                  calidad y la transparencia.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SocioCard
              nombre="Andy Garcia"
              titulo="Desarrollador Full Stack"
              descripcion="Especializado en desarrollo web moderno, automatización y soluciones digitales para empresas."
              imagen="/FotosSocios/Foto-Andy.png"
              github="https://github.com/AndyGar04"
              linkedin="https://www.linkedin.com/in/andy-garcia-programador/"
              portfolio="https://andy-garcia-portfolio.vercel.app/"
            />

            <SocioCard
              nombre="Fausto Desch"
              titulo="Desarrollador Full Stack"
              descripcion="Especializado en soporte técnico, infraestructura informática y desarrollo de soluciones web."
              imagen="/FotosSocios/Fausto-Foto.jfif"
              github="https://github.com/Fausto-Desch"
              linkedin="https://www.linkedin.com/in/fausto-desch-3758a5226/"
              portfolio="https://portfolio-five-indol-34.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};