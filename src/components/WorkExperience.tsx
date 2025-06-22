
import React from 'react';

interface WorkExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const WorkExperience = () => {
  const experiences: WorkExperienceItem[] = [
    {
      period: "2024 — PRESENT",
      title: "Full-stack Developer",
      company: "Slush",
      description: "Building innovative products that connect startups and investors worldwide. Contributing to the product team with focus on web development and user experience.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      period: "2023 — 2024",
      title: "Software Developer",
      company: "Previous Company",
      description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["JavaScript", "React", "Python", "AWS"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span style={{ color: '#4FD1C7' }}>Experience</span>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#4FD1C7' }}></div>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {experience.period}
                    </p>
                  </div>
                  
                  <div className="md:col-span-3 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:opacity-80 transition-opacity">
                        {experience.title} • <span style={{ color: '#4FD1C7' }}>{experience.company}</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105"
                          style={{ 
                            backgroundColor: 'rgba(79, 209, 199, 0.1)',
                            borderColor: 'rgba(79, 209, 199, 0.3)',
                            color: '#4FD1C7'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="mt-12 border-b" style={{ borderColor: 'rgba(79, 209, 199, 0.1)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
