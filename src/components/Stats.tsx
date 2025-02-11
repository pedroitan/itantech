import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { value: '25+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Concluídos' },
  { value: '50+', label: 'Estúdios de Transmissão' },
  { value: '100%', label: 'Satisfação dos Clientes' }
];

export const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black" ref={ref}>
      <div className="container mx-auto px-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-500 delay-${index * 100} ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};