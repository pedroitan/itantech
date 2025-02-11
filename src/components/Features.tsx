import React from 'react';
import { Radio, Tv, Music, Mic2, VideoIcon, Settings2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const features = [
  {
    icon: <Radio className="w-6 h-6" />,
    title: 'Soluções de Transmissão',
    description: 'Design e implementação de estúdios de transmissão de última geração'
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Engenharia de Áudio',
    description: 'Integração profissional de acústica e sistemas de som'
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: 'Sistemas Visuais',
    description: 'Soluções de produção e exibição de vídeo de alta qualidade'
  },
  {
    icon: <Settings2 className="w-6 h-6" />,
    title: 'Planejamento Técnico',
    description: 'Projeto abrangente de sistemas e planejamento de infraestrutura'
  },
  {
    icon: <Mic2 className="w-6 h-6" />,
    title: 'Estúdios de Gravação',
    description: 'Design de estúdio profissional e tratamento acústico'
  },
  {
    icon: <Tv className="w-6 h-6" />,
    title: 'Salas de Controle',
    description: 'Design ergonômico e integração de equipamentos'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-blue-950 relative scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Soluções AV Completas"
            className="text-4xl font-bold mb-4 reveal-text text-white"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Serviços de consultoria especializada para todas as suas necessidades audiovisuais, do conceito à conclusão.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ParallaxCard
                key={index}
                className="p-6 rounded-xl bg-blue-900/20 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-lg transition-all duration-500"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400 transition-transform duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};