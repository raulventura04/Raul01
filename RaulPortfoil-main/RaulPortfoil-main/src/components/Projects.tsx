import React from 'react';
import { Github, Server, Database, Shield } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  icon: React.ElementType;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
    <div className="flex items-center gap-3 mb-4">
      <project.icon className="w-8 h-8 text-secondary" />
      <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, index) => (
        <span key={index} className="px-3 py-1 bg-accent/10 text-secondary rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
    >
      Ver Código
      <Github className="w-4 h-4" />
    </a>
  </div>
);

export function Projects() {
  const projects: Project[] = [
    {
      title: 'API REST - Sistema de Gerenciamento',
      description: 'API desenvolvida em Java Spring Boot para gerenciamento de recursos, implementando boas práticas RESTful e documentação Swagger.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'Swagger'],
      link: 'https://github.com/raulventura04?tab=repositories',
      icon: Server
    },
    {
      title: 'Sistema de Análise de Dados Biológicos',
      description: 'Backend para processamento de dados biológicos, unindo conhecimentos em biologia com programação.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/raulventura04?tab=repositories',
      icon: Database
    },
    {
      title: 'Microserviço de Autenticação',
      description: 'Implementação de um sistema de autenticação usando JWT e boas práticas de segurança.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      link: 'https://github.com/raulventura04?tab=repositories',
      icon: Shield
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}