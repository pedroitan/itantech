import React from 'react';
import { MessageCircle, CheckCheck, QrCode } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';
import { Link } from '../lib/router';

const highlights = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Convites pelo WhatsApp oficial',
    description: 'Envio de convites e lembretes pelo WhatsApp Business Platform, com alto índice de entrega e leitura.'
  },
  {
    icon: <CheckCheck className="w-6 h-6" />,
    title: 'Confirmações em tempo real',
    description: 'Acompanhamento das confirmações de presença (RSVP) conforme os convidados respondem, sem planilhas manuais.'
  },
  {
    icon: <QrCode className="w-6 h-6" />,
    title: 'Ingresso com QR code e check-in',
    description: 'Cada convidado confirmado recebe ingresso com QR code para check-in rápido na portaria do evento.'
  }
];

export const Products = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="plataforma" className="py-24 bg-gradient-to-b from-blue-950 to-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle
            text="Plataforma de convites e RSVP para eventos"
            className="text-3xl sm:text-4xl font-bold mb-4 reveal-text text-white"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologia da Itan Tech para agências, cerimoniais e marcas: convites enviados pelo
            WhatsApp oficial, acompanhamento de confirmações em tempo real e check-in na portaria.
          </p>
        </div>

        <div
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <ParallaxCard
                key={index}
                className="p-6 rounded-xl bg-blue-900/20 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-lg transition-all duration-500"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-400">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contato"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Quero usar no meu evento
          </Link>
        </div>
      </div>
    </section>
  );
};
