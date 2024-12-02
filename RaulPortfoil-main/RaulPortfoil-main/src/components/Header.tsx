import React from 'react';
import { Navigation } from './Navigation';
import { Terminal } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-primary/95 backdrop-blur-sm text-white py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-accent" />
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}