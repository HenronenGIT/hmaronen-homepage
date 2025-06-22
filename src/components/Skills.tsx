
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend", 
      items: ["Node.js", "Python", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Leadership",
      items: ["Product Strategy", "Team Collaboration", "Mentoring", "Problem Solving"]
    },
    {
      category: "Design",
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span style={{ color: '#4FD1C7' }}>Expertise</span>
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#4FD1C7' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
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
                <h3 className="text-xl font-bold mb-4 group-hover:opacity-80 transition-colors" 
                    style={{ color: '#4FD1C7' }}>
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              Core <span style={{ color: '#4FD1C7' }}>Interests</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="px-6 py-3 border rounded-full text-gray-300 transition-all duration-300 hover:scale-105 cursor-default"
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
