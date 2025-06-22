
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 text-white overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Index;
