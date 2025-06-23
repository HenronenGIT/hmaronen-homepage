import {
  Briefcase,
  Code2,
  Database,
  Lightbulb,
  Users,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "#4FD1C7",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Vite",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "#4FD1C7",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "REST APIs",
          logo: null,
        },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      color: "#4FD1C7",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
      ],
    },
  ];

  const personalAttributes = [
    {
      title: "Leadership",
      icon: Users,
      description:
        "Mentoring individuals, sharing knowledge and experiences to help them grow.",
      highlights: ["Mentoring", "Sharing Knowledge", "Teamwork"],
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description:
        "Challenging existing solutions and exploring new ways to solve problems.",
      highlights: [
        "Creative Problem Solving",
        "Product Innovation",
      ],
    },
    {
      title: "Business Focus",
      icon: Briefcase,
      description:
        "Taking head out side of the code and thinking about the bigger picture.",
      highlights: [
        "Business Thinking",
      ],
    },
  ];

  const passions = [
    { name: "Photography", icon: "📸" },
    { name: "Padel", icon: "🎾" },
    { name: "Snowboarding", icon: "🏂" },
    { name: "Entrepreneurship", icon: "🚀" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold font-heading">
              Skills & <span style={{ color: "#4FD1C7" }}>Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
              A comprehensive overview of my technical capabilities, leadership
              experience, and personal interests
            </p>
            <div
              className="w-20 h-1 mx-auto"
              style={{ backgroundColor: "#4FD1C7" }}
            ></div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center font-heading mb-12">
              Technical <span style={{ color: "#4FD1C7" }}>Arsenal</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className="group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.05) 100%)",
                    borderColor: "rgba(79, 209, 199, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#4FD1C7";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(79, 209, 199, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(79, 209, 199, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div
                        className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: "rgba(79, 209, 199, 0.2)" }}
                      >
                        <category.icon
                          className="w-6 h-6"
                          style={{ color: "#4FD1C7" }}
                        />
                      </div>
                      <h4
                        className="text-xl font-bold font-heading"
                        style={{ color: "#4FD1C7" }}
                      >
                        {category.title}
                      </h4>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="p-6 space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-800/30 hover:scale-105"
                      >
                        {skill.logo ? (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-6 h-6"
                          />
                        ) : (
                          <div className="w-6 h-6 rounded bg-gray-600 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-300">
                              API
                            </span>
                          </div>
                        )}
                        <span className="font-medium text-gray-300 font-sans group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Attributes */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center font-heading">
              Personal <span style={{ color: "#4FD1C7" }}>Strengths</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalAttributes.map((attribute, index) => (
                <div
                  key={attribute.title}
                  className="group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.05) 100%)",
                    borderColor: "rgba(79, 209, 199, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#4FD1C7";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(79, 209, 199, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(79, 209, 199, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="space-y-4">
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "rgba(79, 209, 199, 0.2)" }}
                    >
                      <attribute.icon
                        className="w-8 h-8"
                        style={{ color: "#4FD1C7" }}
                      />
                    </div>
                    <h4
                      className="text-xl font-bold font-heading"
                      style={{ color: "#4FD1C7" }}
                    >
                      {attribute.title}
                    </h4>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      {attribute.description}
                    </p>
                    <div className="space-y-2 pt-2">
                      {attribute.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="inline-block px-3 py-1 mx-1 rounded-full text-sm font-medium border"
                          style={{
                            backgroundColor: "rgba(79, 209, 199, 0.1)",
                            borderColor: "rgba(79, 209, 199, 0.3)",
                            color: "#4FD1C7",
                          }}
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Passions & Interests */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center font-heading">
              Beyond <span style={{ color: "#4FD1C7" }}>Code</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {passions.map((passion, index) => (
                <div
                  key={passion.name}
                  className="group px-8 py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.05) 100%)",
                    borderColor: "rgba(79, 209, 199, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#4FD1C7";
                    e.currentTarget.style.transform =
                      "scale(1.1) translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(79, 209, 199, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(79, 209, 199, 0.3)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{passion.icon}</span>
                    <span
                      className="font-semibold font-sans group-hover:text-white transition-colors"
                      style={{ color: "#4FD1C7" }}
                    >
                      {passion.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
