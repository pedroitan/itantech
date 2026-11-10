import React from 'react';
import { Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const clients = [
  'Sony Music',
  'Universal Music',
  'Warner Music',
  'Google',
  'O Boticário',
  'Ambev / Spaten PRO'
];

export const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black" ref={ref}>
      <div className="container mx-auto px-6 text-white">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16 transform transition-all duration-500 ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-400">Anos de Experiência do Fundador</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-4xl font-bold text-blue-400 mb-2">
              <Award className="w-8 h-8" />
              <span>Grammy Latino</span>
            </div>
            <div className="text-gray-400">Indicação em 2016</div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">
          Projetos e trabalhos para
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {clients.map((client) => (
            <span
              key={client}
              className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-900/20 text-gray-300 text-sm"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
