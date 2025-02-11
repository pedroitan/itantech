import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-blue-950 text-white">
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h2 className="text-5xl font-bold mb-6 gradient-animate bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            A Excelência da Itan Tech
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Da acústica à seleção de equipamentos, nossos consultores especialistas garantem 
            que seus sistemas audiovisuais superem os padrões da indústria e entreguem 
            performance excepcional.
          </p>
          <button className="group px-8 py-4 bg-white text-blue-900 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 hover:scale-105">
            Conheça Nossos Projetos
          </button>
        </div>
      </div>
    </section>
  );
}