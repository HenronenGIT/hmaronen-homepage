
import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                About <span style={{ color: '#4FD1C7' }}>Me</span>
              </h2>
              <div className="w-20 h-1" style={{ backgroundColor: '#4FD1C7' }}></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-sans">
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
            <div className="rounded-2xl p-8 backdrop-blur-sm border"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)',
                   borderColor: 'rgba(79, 209, 199, 0.3)'
                 }}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-sans">Current Role</span>
                  <span className="font-semibold font-sans" style={{ color: '#4FD1C7' }}>Product Team @ Slush</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-sans">Education</span>
                  <span className="font-semibold font-sans" style={{ color: '#4FD1C7' }}>Hive Helsinki</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-sans">Focus</span>
                  <span className="font-semibold font-sans" style={{ color: '#4FD1C7' }}>Web Development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-sans">Interests</span>
                  <span className="font-semibold font-sans" style={{ color: '#4FD1C7' }}>Entrepreneurship</span>
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
