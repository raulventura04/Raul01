import React from 'react';
import { Terminal, Database, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="gradient-bg text-white py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <Terminal className="w-10 h-10 text-[#4FD1C5]" />
              <Database className="w-10 h-10 text-[#4FD1C5]" />
              <Code2 className="w-10 h-10 text-[#4FD1C5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Backend Developer</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Raul Ventura</h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Desenvolvedor backend em transição de carreira, combinando o pensamento analítico da biologia 
              com a paixão por criar soluções tecnológicas inovadoras.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/src/components/eu"
              alt="Developer Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-[#4FD1C5] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}