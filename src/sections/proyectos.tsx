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
    title: "LLA Puan - Distrito",
    description: "Plataforma de difusión política con gestión de contenidos dinámicos. Optimizada para SEO y rendimiento con Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repoLink: "https://github.com/Fausto-Desch/PaginaLLADistritoPuan",
    demoLink: "https://lla-distrito-puan.vercel.app/",
    image: "/Proyectos/LLA-Proyecto.jpg"
  },
  {
    id: 2,
    title: "Julian Heit Portfolio",
    description: "Sitio profesional para especialista en marketing. Diseño minimalista enfocado en la conversión y marca personal.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    repoLink: "https://github.com/Fausto-Desch/PortafolioPato",
    demoLink: "https://portafolio-five-delta-26.vercel.app/",
    image: "/Proyectos/JulianHeit-Proyecto.jpg"
  },
  {
    id: 3,
    title: "InnovaByte Landing",
    description: "Portal corporativo para agencia tecnológica. Incluye catálogo de servicios, stock y arquitectura de contenedores.",
    tags: ["Docker", "PostgreSQL", "Nginx", "React", "Express"],
    repoLink: "https://github.com/AndyGar04/Innova-Landing",
    demoLink: "https://github.com/AndyGar04/Innova-Landing",
    image: "/Proyectos/InnovaPagina.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: easeOut } 
  }
};

export const Proyectos: React.FC = () => {
  return (
    // Fondo light: Blanco puro | Fondo dark: Azul profundo de la imagen
    <section id="proyectos" className="py-28 bg-white dark:bg-[#020817] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            {/* Icono con el cian de "EQUIPOS LISTOS" */}
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500">
              <FolderOpen size={32} />
            </div>
            {/* Título: Verde oscuro (emerald-950) en light | Blanco en dark */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#062c25] dark:text-white">
              Mis <span className="text-cyan-500">Proyectos</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium md:ml-4 md:mb-1 border-l-2 border-slate-200 dark:border-slate-800 pl-4 italic">
            Equipos seleccionados y testeados por nuestro equipo técnico.
          </p>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.article 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              // Light: Gris muy suave con sombra sutil | Dark: Azul pizarra de la imagen
              className="group flex flex-col bg-slate-50/50 dark:bg-[#111827] rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* IMAGEN DEL PROYECTO */}
              <div className="relative h-56 overflow-hidden p-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
                
                {/* Badge con acento cian */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-cyan-400/90 text-[#062c25] rounded-lg backdrop-blur-md shadow-sm">
                    {project.tags[0]}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-extrabold mb-2 text-[#062c25] dark:text-white group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                {/* TAGS / PRECIO STYLE */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
                  <span className="text-lg font-bold text-cyan-500">
                    {project.tags[1]}
                  </span>
                  
                  {/* Botón de acción circular como el '>' de la imagen */}
                  <div className="p-2 rounded-lg bg-[#062c25] text-white">
                    <ExternalLink size={16} />
                  </div>
                </div>

                {/* BOTONES / LINKS */}
                <div className="flex items-center gap-6 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/50">
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-cyan-500 transition-colors"
                  >
                    <Github size={18}/> Code
                  </a>
                  
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-[#062c25] bg-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-300 shadow-md shadow-cyan-500/10 transition-all ml-auto"
                  >
                    Live Demo
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