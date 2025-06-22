
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="text-orange-400">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="group p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-orange-400 mb-4 group-hover:text-orange-300 transition-colors">
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
              Core <span className="text-orange-400">Interests</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-gray-300 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
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
