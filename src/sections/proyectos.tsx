import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

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
        title: "Plataforma de reservas de canchas - API",
        description: " Aplicación web para reservar canchas deportivas, gestion de usuarios, canchas",
        tags: ["Node.js", "TypeScript", "SQLite", "Express", "JWT"],
        repoLink: "https://github.com/AndyGar04/Proyecto-Final-Tup-BackEnd",
        demoLink: "https://github.com/AndyGar04/Proyecto-Final-Tup-BackEnd",
        image: "/SportManagerBack.jpg"
    },
    {
        id: 2,
        title: "Plataforma de reservas de canchas - Frontend",
        description: "Interfaz web para la plataforma de reservas de canchas, con autenticación y gestión de reservas.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        repoLink: "https://github.com/AndyGar04/Proyecto-Final-FrontEnd",
        demoLink: "https://proyecto-final-frontend-one-beta.vercel.app/presentacion",
        image: "/SportManager.jpg"
    },
    {
        id: 3,
        title: "Sistema de gestion de inventarios - Proyecto FullStack",
        description: "Aplicación web para gestionar inventarios, con funcionalidades de CRUD y panel de administración.",
        tags: ["React", "JavaScript", "Express", "Nginx", "PostgreSQL", "Docker"],
        repoLink: "https://github.com/AndyGar04/ProgramacionIII/tree/main/Proyecto-Final",
        demoLink: "#",
        image: "/GestionDeStock.jpg"
    }
];


export const Proyectos: React.FC = () => {
    return (
        <section id="proyectos" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
                <Code className="text-blue-600 dark:text-blue-400" size={28} />
                <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                <article key={project.id} className="...">
                    <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {tag}
                        </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <a href={project.repoLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Github size={18}/> GitHub
                        </a>
                        <a href={project.demoLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto">
                        Demo <ExternalLink size={16} />
                        </a>
                    </div>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </section>
    );
};    