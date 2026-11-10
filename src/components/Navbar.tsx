import React from 'react';
import { Link } from '../lib/router';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tight">
          Itan <span className="text-blue-400">Tech</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/#plataforma" className="text-gray-300 hover:text-white transition-colors">
            Plataforma
          </Link>
          <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
            Contato
          </Link>
          <Link
            to="/contato"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Agendar Consultoria
          </Link>
        </nav>
      </div>
    </header>
  );
};
