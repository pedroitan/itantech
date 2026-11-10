import React from 'react';
import { Radio, ArrowRight } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';
import { Link } from '../lib/router';
import heroImage from '../assets/capa.png';

export const Hero = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-black -z-10 gradient-animate" />
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
          opacity: 0.2,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full mb-8 animate-float">
              <Radio className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Itan Tech | Audiovisual e Tecnologia para Eventos
              </span>
            </div>
            
            <AnimatedTitle 
              text="ITAN TECH - Soluções em Audiovisual e Tecnologia para Eventos"
              className="text-3xl sm:text-6xl font-bold mb-8 reveal-text text-white"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="section-transition"
            style={{ 
              transform: contentTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <p className="text-base sm:text-xl text-gray-300 mb-12 leading-relaxed">
              De estúdios de transmissão a espaços de performance, a Itan Tech projeta e implementa 
              soluções audiovisuais e de tecnologia para eventos que transformam sua visão em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 hover:gap-4"
              >
                Agendar Consultoria
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/#plataforma"
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Conheça a Plataforma
              </Link>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
}