
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-teal-400 text-lg md:text-xl font-medium tracking-wide">
                Full-stack Developer
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
                <span className="block">Creative</span>
                <span className="block text-teal-400">Developer</span>
              </h1>
            </div>
            
            <div className="space-y-6 max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Crafting exceptional web experiences at <span className="text-teal-400 font-semibold">Slush</span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Product team member with deep passion for entrepreneurship, leadership, 
                and quality UI/UX design. Hive Helsinki alumni.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                View Projects
              </button>
              <button className="border border-purple-500 hover:border-teal-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600/20 to-teal-400/20 rounded-2xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
              <div className="text-gray-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Personal Photo</p>
              </div>
            </div>
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
