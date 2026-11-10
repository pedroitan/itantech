import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { ParallaxSection } from '../components/ParallaxSection';
import { Stats } from '../components/Stats';

export const Home = () => {
  useEffect(() => {
    document.title = 'Itan Tech — Tecnologia para Eventos e Soluções Audiovisuais';
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <Features />
      <ParallaxSection />
      <Stats />
    </>
  );
};
