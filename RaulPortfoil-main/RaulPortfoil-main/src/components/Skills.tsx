import React from 'react';
import { Database, Code2, GitBranch, Brain, Beaker, Users } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: React.ElementType }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent">
    <Icon className="w-8 h-8 text-secondary mb-4" />
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs']
    },
    {
      title: 'Banco de Dados',
      icon: Code2,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design']
    },
    {
      title: 'Controle de Versão',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Conventional Commits', 'Branching Strategies']
    },
    {
      title: 'Linguagens',
      icon: Code2,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Resolução de Problemas', 'Trabalho em Equipe', 'Comunicação', 'Adaptabilidade']
    },
    {
      title: 'Background Científico',
      icon: Beaker,
      skills: ['Análise de Dados', 'Metodologia Científica', 'Pensamento Analítico']
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}