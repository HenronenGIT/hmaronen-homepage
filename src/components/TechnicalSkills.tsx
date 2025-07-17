import { Code2, Database, Wrench, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { COLORS } from "../constants/colors";

interface Skill {
  name: string;
  logo: string | null;
  category: "frontend" | "backend" | "tools" | string[];
}

interface SkillBlobProps {
  skill: Skill;
  isActive: boolean;
  index: number;
}

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  icon: LucideIcon;
}

const SkillBlob = ({ skill, isActive, index }: SkillBlobProps) => {
  const animationDelay = index * 0.2;
  const floatDirection = index % 2 === 0 ? 1 : -1;

  return (
    <div
      className={`group relative overflow-hidden rounded-full backdrop-blur-md transition-all duration-700 ease-out transform hover:scale-110 cursor-pointer ${
        floatDirection > 0 ? "float-up" : "float-down"
      } ${
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95 blur-[1px]"
      }`}
      style={{
        background: `linear-gradient(135deg, ${COLORS.primaryAlpha[15]}, ${COLORS.primaryAlpha[5]})`,
        border: `1px solid ${COLORS.primaryAlpha[20]}`,
        boxShadow: isActive
          ? `0 8px 32px ${COLORS.primaryAlpha[20]}, inset 0 1px 1px ${COLORS.primaryAlpha[30]}`
          : `0 4px 16px ${COLORS.primaryAlpha[10]}, inset 0 1px 1px ${COLORS.primaryAlpha[20]}`,
        animationDelay: `${animationDelay}s`,
      }}
      onMouseEnter={(e) => {
        if (isActive) {
          e.currentTarget.style.borderColor = COLORS.primary;
          e.currentTarget.style.boxShadow = `0 12px 40px ${COLORS.primaryAlpha[30]}, inset 0 1px 1px ${COLORS.primaryAlpha[40]}`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = COLORS.primaryAlpha[20];
        e.currentTarget.style.boxShadow = isActive
          ? `0 8px 32px ${COLORS.primaryAlpha[20]}, inset 0 1px 1px ${COLORS.primaryAlpha[30]}`
          : `0 4px 16px ${COLORS.primaryAlpha[10]}, inset 0 1px 1px ${COLORS.primaryAlpha[20]}`;
      }}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-full transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${COLORS.primaryAlpha[20]}, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-3 md:p-6 lg:p-8 space-y-2 md:space-y-3">
        {skill.logo ? (
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: COLORS.primaryAlpha[30] }}
          >
            <span
              className="text-xs font-bold"
              style={{ color: COLORS.primary }}
            >
              API
            </span>
          </div>
        )}
        <span
          className="font-medium text-center font-sans group-hover:text-white transition-colors duration-300 text-xs md:text-sm lg:text-base px-1"
          style={{ color: COLORS.text.primary }}
        >
          {skill.name}
        </span>
      </div>
    </div>
  );
};

const FilterButton = ({
  category,
  isActive,
  onMouseEnter,
  onMouseLeave,
  icon: Icon,
}: FilterButtonProps) => (
  <button
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`group flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 font-semibold font-sans ${
      isActive ? "scale-105" : "hover:scale-105"
    }`}
    style={{
      background: isActive
        ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryAlpha[80]})`
        : `linear-gradient(135deg, ${COLORS.primaryAlpha[15]}, ${COLORS.primaryAlpha[5]})`,
      border: `1px solid ${isActive ? COLORS.primary : COLORS.primaryAlpha[20]}`,
      boxShadow: isActive
        ? `0 8px 24px ${COLORS.primaryAlpha[30]}`
        : `0 4px 12px ${COLORS.primaryAlpha[10]}`,
      color: isActive ? "#ffffff" : COLORS.text.primary,
    }}
  >
    <Icon className="w-4 h-4 md:w-5 md:h-5" />
    <span className="text-sm md:text-base">{category}</span>
  </button>
);

const SubsectionHeader = ({
  title,
  coloredWord,
}: {
  title: string;
  coloredWord: string;
}) => (
  <h3 className="text-2xl md:text-3xl font-bold text-center font-heading mb-8 md:mb-12">
    {title} <span style={{ color: COLORS.primary }}>{coloredWord}</span>
  </h3>
);

const TechnicalSkills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  // All skills with category information
  const allSkills: Skill[] = [
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: ["frontend", "backend"],
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "tools",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "backend",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "tools",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "backend",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "frontend",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "frontend",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "tools",
    },
    {
      name: "REST APIs",
      logo: null,
      category: "backend",
    },
    {
      name: "Vite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      category: "frontend",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "tools",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "backend",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      category: "backend",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "frontend",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      category: "tools",
    },
    {
      name: "DataGrip",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datagrip/datagrip-original.svg",
      category: "tools",
    },
    {
      name: "Notion",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
      category: "tools",
    },
    {
      name: "Cursor",
      logo: "https://cursor.sh/brand/icon.svg",
      category: "tools",
    },
  ];

  const filterCategories = [
    { name: "Frontend", icon: Code2 },
    { name: "Backend", icon: Database },
    { name: "Tools", icon: Wrench },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <SubsectionHeader title="Technical" coloredWord="Arsenal" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {filterCategories.map((category) => (
          <FilterButton
            key={category.name}
            category={category.name}
            isActive={activeFilter === category.name}
            onMouseEnter={() => setActiveFilter(category.name)}
            onMouseLeave={() => setActiveFilter("")}
            icon={category.icon}
          />
        ))}
      </div>

      {/* Skills Blobs */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
        {allSkills.map((skill, index) => (
          <SkillBlob
            key={skill.name}
            skill={skill}
            isActive={
              activeFilter === "" ||
              (Array.isArray(skill.category)
                ? skill.category.some(
                    (cat) => cat.toLowerCase() === activeFilter.toLowerCase()
                  )
                : skill.category === activeFilter.toLowerCase())
            }
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
