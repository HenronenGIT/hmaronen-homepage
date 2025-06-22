
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-orange-400 text-lg md:text-xl font-medium tracking-wide">
              Full-stack Developer
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
              <span className="block">Creative</span>
              <span className="block text-orange-400">Developer</span>
            </h1>
          </div>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Crafting exceptional web experiences at <span className="text-orange-400 font-semibold">Slush</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Product team member with deep passion for entrepreneurship, leadership, 
              and quality UI/UX design. Hive Helsinki alumni.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
              View Projects
            </button>
            <button className="border border-gray-600 hover:border-orange-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
