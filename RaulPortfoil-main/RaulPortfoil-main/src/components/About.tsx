import React from 'react';
import { Target, BookOpen, Code } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Objetivo</h3>
            <p className="text-gray-600">
              Focado em soluções inovadoras, desejo crescer profissionalmente em um ambiente 
              colaborativo que valorize a resolução de problemas.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Formação</h3>
            <p className="text-gray-600">
              Graduado em Biologia, com formação complementar pelo programa ORACLE NEXT EDUCATION.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
            <p className="text-gray-600">
              Programação Orientada a Objetos, Git, Trabalho em Equipe, Resolução de Problemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}