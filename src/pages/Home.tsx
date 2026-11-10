import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { ParallaxSection } from '../components/ParallaxSection';
import { Stats } from '../components/Stats';

export const Home = () => {
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
