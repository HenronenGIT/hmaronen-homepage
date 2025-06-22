
import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-teal-400">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-400"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                I'm a passionate full-stack developer currently working at Slush, 
                where I contribute to building innovative products that connect 
                startups and investors worldwide.
              </p>
              <p>
                As a proud alumnus of Hive Helsinki, I've developed a strong 
                foundation in problem-solving and collaborative development. 
                My journey in tech is driven by curiosity and a constant desire 
                to learn and grow.
              </p>
              <p>
                Beyond coding, I'm deeply interested in entrepreneurship and 
                leadership, always looking for ways to bridge technology and 
                business to create meaningful solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-teal-400/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Current Role</span>
                  <span className="text-teal-400 font-semibold">Product Team @ Slush</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Education</span>
                  <span className="text-teal-400 font-semibold">Hive Helsinki</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Focus</span>
                  <span className="text-teal-400 font-semibold">Web Development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Interests</span>
                  <span className="text-teal-400 font-semibold">Entrepreneurship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
