import { COLORS } from '../constants/colors';

interface WorkExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: WorkExperienceItem;
  index: number;
  isLast: boolean;
}

interface TechnologyBadgeProps {
  technology: string;
}

const TechnologyBadge = ({ technology }: TechnologyBadgeProps) => (
  <span
    className="px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 font-sans"
    style={{
      backgroundColor: COLORS.primaryAlpha[10],
      borderColor: COLORS.primaryAlpha[30],
      color: COLORS.primary,
    }}
  >
    {technology}
  </span>
);

const ExperienceCard = ({ experience, index, isLast }: ExperienceCardProps) => (
  <div className="group">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Period */}
      <div className="md:col-span-1">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider font-heading">
          {experience.period}
        </p>
      </div>

      {/* Content */}
      <div className="md:col-span-3 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:opacity-80 transition-opacity font-heading">
            {experience.title} •{" "}
            <span style={{ color: COLORS.primary }}>
              {experience.company}
            </span>
          </h3>

          <div className="space-y-3">
            {experience.description.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className="text-gray-300 leading-relaxed font-sans"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => (
            <TechnologyBadge key={techIndex} technology={tech} />
          ))}
        </div>
      </div>
    </div>

    {/* Separator */}
    {!isLast && (
      <div
        className="mt-12 border-b"
        style={{ borderColor: COLORS.primaryAlpha[10] }}
      />
    )}
  </div>
);

const SectionHeader = () => (
  <div className="text-center space-y-4">
    <h2 className="text-4xl md:text-5xl font-bold font-heading">
      <span style={{ color: COLORS.primary }}>Experience</span>
    </h2>
    <div
      className="w-20 h-1 mx-auto"
      style={{ backgroundColor: COLORS.primary }}
    />
  </div>
);

const WorkExperience = () => {
  const experiences: WorkExperienceItem[] = [
    {
      period: "2025 - PRESENT",
      title: "Senior Full-stack Developer",
      company: "Slush",
      description: [
        "Build and maintain scalable full-stack applications serving Slush's 13,000+ attendees.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Google Cloud Platform",
      ],
    },
    {
      period: "2024",
      title: "Full-stack Developer",
      company: "Slush",
      description: [
        "Built internal tools that improved workflows for the Slush team.",
        "Project owner of Slush Online, a year-round platform helping founders share insights and connect with investors.",
        "Project owner of Media Bank, enabling media attendees to access press releases and media kits with ease.",
        "Contributed to the Activities Tool, supporting the creation of 500+ side events via a dynamic submission form I was responsible for.",
        "Initiated and built 'Knowledge' — a chatbot for info volunteers to access real-time information about Slush and the event.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express",
        "Google Cloud Platform",
      ],
    },
    {
      period: "2023",
      title: "Junior Full-stack Developer",
      company: "Slush",
      description: [
        "Developed and maintained internal tools that streamlined operations for the Slush team.",
        "Implemented new features for the Talent Tool, supporting the recruitment of over 1,000 volunteers.",
        "Co-developed the Media Bank, providing an organized tool for press materials and resources.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Express"],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <SectionHeader />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
