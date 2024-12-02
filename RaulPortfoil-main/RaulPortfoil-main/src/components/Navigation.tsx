import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation items */}
      <div className={`
        ${isMenuOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row gap-8 items-center
        absolute md:relative top-12 md:top-0 right-0 md:right-auto
        bg-primary md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none
        shadow-lg md:shadow-none
        min-w-[200px] md:min-w-0
      `}>
        <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
        <a href="#habilidades" className="hover:text-accent transition-colors">Habilidades</a>
        <a href="#projetos" className="hover:text-accent transition-colors">Projetos</a>
        <div className="flex gap-4">
          <a 
            href="https://github.com/raulventura04?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/raul-ventura-6502a8234/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:raulventura04@gmail.com" 
            className="hover:text-accent transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}