
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#1A1A1B' }}>
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
    </div>
  );
};

export default Index;
