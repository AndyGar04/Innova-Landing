<<<<<<< HEAD
import {
  Code,
  Github,
  Linkedin,
  Globe,
  Users,
  Target,
  Rocket,
} from 'lucide-react';
import React from 'react';

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
  <div
    className="
      relative
      bg-white
      dark:bg-slate-800
      p-8
      rounded-[2rem]
      shadow-xl
      border
      border-slate-100
      dark:border-slate-700
      hover:border-innova-tech
      hover:-translate-y-2
      transition-all
      duration-300
      group
      overflow-hidden
    "
  >
   <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-innova-tech/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative mb-6">
      <div className="w-40 h-40 mx-auto rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-700 shadow-lg">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 right-6 bg-innova-tech p-3 rounded-xl text-innova-dark shadow-xl">
        <Code size={18} />
      </div>
    </div>

    <div className="text-center space-y-2">
      <h4 className="text-2xl font-bold text-innova-dark dark:text-white">
        {nombre}
      </h4>

      <p className="text-sm font-bold text-innova-tech uppercase tracking-wider">
        {titulo}
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {descripcion}
      </p>
    </div>

    <div className="flex justify-center gap-3 mt-8">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-innova-dark hover:text-white transition-colors"
      >
        <Github size={20} />
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
      >
        <Linkedin size={20} />
      </a>

      <a
        href={portfolio}
        target="_blank"
        rel="noreferrer"
        className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-innova-tech hover:text-innova-dark transition-colors"
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
      className="py-24 bg-innova-bg dark:bg-innova-dark-bg transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXTO */}
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
                En <strong>InnovaByte</strong> combinamos experiencia en
                desarrollo de software, soporte técnico y soluciones digitales
                para ayudar a personas, emprendimientos y empresas a potenciar
                su presencia tecnológica.
              </p>

              <p>
                Nuestro objetivo es brindar soluciones modernas, eficientes y
                accesibles, acompañando a cada cliente desde la idea inicial
                hasta la implementación final.
              </p>
            </div>

            {/* ESTADÍSTICAS */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 text-center shadow-lg border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-black text-innova-tech">20+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Proyectos
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 text-center shadow-lg border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-black text-innova-tech">50+</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Clientes
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 text-center shadow-lg border border-slate-100 dark:border-slate-700">
                <h3 className="text-3xl font-black text-innova-tech">100%</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Compromiso
                </p>
              </div>
            </div>

            {/* MISIÓN Y VISIÓN */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">

              <div className="bg-white dark:bg-slate-800 p-6 rounded-[1.5rem] shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-innova-dark dark:text-innova-tech font-bold mb-3">
                  <Target size={20} />
                  Nuestra Misión
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Resolver necesidades informáticas con servicios confiables,
                  modernos y cercanos, adaptados a cada cliente.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-[1.5rem] shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-innova-dark dark:text-innova-tech font-bold mb-3">
                  <Rocket size={20} />
                  Nuestra Visión
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ser un referente tecnológico en Bahía Blanca, destacándonos
                  por la innovación, la calidad y la transparencia.
                </p>
              </div>

            </div>
          </div>

          {/* SOCIOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

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
=======
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
                            imagen="/FotosSocios/Foto-Andy.png" 
                            github="https://github.com/AndyGar04"
                            linkedin="https://www.linkedin.com/in/andy-garcia-programador/"
                            portfolio="https://andy-garcia-portfolio.vercel.app/"
                        />
                        <SocioCard 
                            nombre="Fausto Desch"
                            titulo="Tecnico en programación e informático"
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
>>>>>>> 6b6e22c9b98138c11f765554a41b1f6e13ed497d
};