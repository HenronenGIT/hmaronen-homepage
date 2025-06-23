
import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      icon: Code,
      items: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      category: "Backend", 
      icon: Code,
      items: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "REST APIs", logo: null }
      ]
    }
  ];

  const softSkills = [
    {
      category: "Leadership",
      icon: Users,
      items: ["Product Strategy", "Team Collaboration", "Mentoring", "Problem Solving"]
    },
    {
      category: "Design",
      icon: Lightbulb,
      items: ["UI/UX Design", "User Research", "Prototyping", "Design Systems"]
    }
  ];

  const interests = [
    "Entrepreneurship",
    "Product Development", 
    "Quality UI/UX",
    "Leadership",
    "Innovation",
    "Startup Ecosystem"
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: 'rgba(79, 209, 199, 0.05)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Skills & <span style={{ color: '#4FD1C7' }}>Expertise</span>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#4FD1C7' }}></div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center font-heading">
              Technical <span style={{ color: '#4FD1C7' }}>Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.category}
                  className="group p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(79, 209, 199, 0.05)',
                    borderColor: 'rgba(79, 209, 199, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79, 209, 199, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79, 209, 199, 0.2)';
                  }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 mr-3" style={{ color: '#4FD1C7' }} />
                    <h4 className="text-xl font-bold group-hover:opacity-80 transition-colors font-heading" 
                        style={{ color: '#4FD1C7' }}>
                      {skill.category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skill.items.map((item) => (
                      <div key={typeof item === 'string' ? item : item.name} 
                           className="flex items-center space-x-2 p-2 rounded-lg transition-colors hover:bg-gray-800/30">
                        {typeof item === 'object' && item.logo ? (
                          <img src={item.logo} alt={item.name} className="w-5 h-5" />
                        ) : (
                          <div className="w-5 h-5 rounded bg-gray-600 flex items-center justify-center">
                            <span className="text-xs font-bold">API</span>
                          </div>
                        )}
                        <span className="text-gray-300 group-hover:text-white transition-colors font-sans text-sm">
                          {typeof item === 'string' ? item : item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center font-heading">
              Soft <span style={{ color: '#4FD1C7' }}>Skills</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.category}
                  className="group p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(79, 209, 199, 0.05)',
                    borderColor: 'rgba(79, 209, 199, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79, 209, 199, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79, 209, 199, 0.2)';
                  }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 mr-3" style={{ color: '#4FD1C7' }} />
                    <h4 className="text-xl font-bold group-hover:opacity-80 transition-colors font-heading" 
                        style={{ color: '#4FD1C7' }}>
                      {skill.category}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-300 group-hover:text-white transition-colors font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center font-heading">
              Core <span style={{ color: '#4FD1C7' }}>Interests</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="px-6 py-3 border rounded-full text-gray-300 transition-all duration-300 hover:scale-105 cursor-default font-sans"
                  style={{ 
                    backgroundColor: 'rgba(79, 209, 199, 0.05)',
                    borderColor: 'rgba(79, 209, 199, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4FD1C7';
                    e.currentTarget.style.color = '#4FD1C7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79, 209, 199, 0.3)';
                    e.currentTarget.style.color = 'rgb(209, 213, 219)';
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
