import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
  image: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'LLA Puan - Distrito',
    description:
      'Plataforma de difusión política con gestión de contenidos dinámicos. Optimizada para SEO y rendimiento usando tecnologías modernas.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    repoLink: 'https://github.com/Fausto-Desch/PaginaLLADistritoPuan',
    demoLink: 'https://lla-distrito-puan.vercel.app/',
    image: '/Proyectos/LLA-Proyecto.jpg',
  },
  {
    id: 2,
    title: 'Julian Heit Portfolio',
    description:
      'Sitio profesional para especialista en marketing. Diseño moderno enfocado en la conversión, presencia digital y marca personal.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    repoLink: 'https://github.com/Fausto-Desch/PortafolioPato',
    demoLink: 'https://portafolio-five-delta-26.vercel.app/',
    image: '/Proyectos/JulianHeit-Proyecto.jpg',
  },
  {
    id: 3,
    title: 'InnovaByte Landing',
    description:
      'Landing page corporativa diseñada para presentar servicios tecnológicos, captar clientes y fortalecer la presencia digital de la marca.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Docker'],
    repoLink: 'https://github.com/AndyGar04/Innova-Landing',
    demoLink: 'https://github.com/AndyGar04/Innova-Landing',
    image: '/Proyectos/InnovaPagina.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export const Proyectos: React.FC = () => {
  return (
    <section
      id="proyectos"
      className="bg-white py-28 transition-colors duration-500 dark:bg-[#020817]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
              <FolderOpen size={32} />
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#062c25] dark:text-white md:text-5xl">
              Mis <span className="text-cyan-500">Proyectos</span>
            </h2>
          </div>

          <p className="border-l-2 border-slate-200 pl-4 text-sm font-medium text-slate-500 italic md:mb-1 md:ml-4 dark:border-slate-800 dark:text-slate-400">
            Algunos de los proyectos que desarrollamos para clientes, emprendimientos y marcas personales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/80 shadow-sm transition-all duration-500 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-[#111827]"
            >
              <div className="relative h-60 overflow-hidden p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute right-6 top-6">
                  <span className="rounded-lg bg-cyan-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#062c25] backdrop-blur-md">
                    {project.tags[0]}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-2xl font-extrabold text-[#062c25] transition-colors group-hover:text-cyan-500 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-cyan-500"
                  >
                    <Github size={18} />
                    Código
                  </a>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-[#062c25] transition-all hover:scale-105 hover:bg-cyan-400"
                  >
                    Ver Proyecto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};