
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#1A1A1B' }}>
      <Navigation />
      <SocialLinks />
      <Hero />
      <div id="about">
        <About />
      </div>
      <WorkExperience />
      <Skills />
    </div>
  );
};

export default Index;
