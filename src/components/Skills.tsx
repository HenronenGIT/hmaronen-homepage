import { Eye, Lightbulb, Users, type LucideIcon } from "lucide-react";
import { COLORS } from "../constants/colors";
import TechnicalSkills from "./TechnicalSkills";

interface PersonalAttribute {
  title: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
}

interface Passion {
  name: string;
  icon: string;
}

interface PersonalAttributeCardProps {
  attribute: PersonalAttribute;
}

interface PassionCardProps {
  passion: Passion;
}

const PersonalAttributeCard = ({ attribute }: PersonalAttributeCardProps) => (
  <div
    className="group p-4 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center"
    style={{
      background: COLORS.gradients.primary,
      borderColor: COLORS.primaryAlpha[20],
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = COLORS.primary;
      e.currentTarget.style.boxShadow = COLORS.shadows.primaryMedium;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = COLORS.primaryAlpha[20];
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div className="space-y-3 md:space-y-4">
      <div
        className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: COLORS.primaryAlpha[20] }}
      >
        <attribute.icon
          className="w-6 h-6 md:w-8 md:h-8"
          style={{ color: COLORS.primary }}
        />
      </div>
      <h4
        className="text-lg md:text-xl font-bold font-heading"
        style={{ color: COLORS.text.primary }}
      >
        {attribute.title}
      </h4>
      <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
        {attribute.description}
      </p>
      <div className="space-y-2 pt-2">
        {attribute.highlights.map((highlight, index) => (
          <div
            key={index}
            className="inline-block px-2 md:px-3 py-1 mx-1 rounded-full text-xs md:text-sm font-medium border"
            style={{
              backgroundColor: COLORS.primaryAlpha[10],
              borderColor: COLORS.primaryAlpha[30],
              color: COLORS.primary,
            }}
          >
            {highlight}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PassionCard = ({ passion }: PassionCardProps) => (
  <div
    className="group px-4 md:px-8 py-3 md:py-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer"
    style={{
      background: COLORS.gradients.primary,
      borderColor: COLORS.primaryAlpha[30],
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = COLORS.primary;
      e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
      e.currentTarget.style.boxShadow = COLORS.shadows.primary;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = COLORS.primaryAlpha[30];
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div className="flex items-center space-x-2 md:space-x-3">
      <span className="text-xl md:text-2xl">{passion.icon}</span>
      <span
        className="font-semibold font-sans group-hover:text-white transition-colors text-sm md:text-base"
        style={{ color: COLORS.text.primary }}
      >
        {passion.name}
      </span>
    </div>
  </div>
);

const SectionHeader = () => (
  <div className="text-center space-y-4 md:space-y-6">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading">
      Skills & <span style={{ color: COLORS.primary }}>Expertise</span>
    </h2>
    <div
      className="w-20 h-1 mx-auto"
      style={{ backgroundColor: COLORS.primary }}
    />
  </div>
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

const Skills = () => {
  const personalAttributes: PersonalAttribute[] = [
    {
      title: "Leadership",
      icon: Users,
      description:
        "Helping teammates grow through mentoring, sharing what I’ve learned, and building together.",
      highlights: ["Mentorship", "Knowledge Sharing", "Team Collaboration"],
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description:
        "I look for better ways to solve problems by experimenting and challenging assumptions.",
      highlights: ["Creative Problem Solving", "Product Innovation"],
    },
    {
      title: "Attention to Detail",
      icon: Eye,
      description:
        "I sweat the small stuff — especially in design and UX — to make things feel just right.",
      highlights: ["UI/UX Design", "Interaction Design"],
    },
  ];

  const passions: Passion[] = [
    { name: "Photography", icon: "📸" },
    { name: "Padel", icon: "🎾" },
    { name: "Snowboarding", icon: "🏂" },
    { name: "Entrepreneurship", icon: "🚀" },
    { name: "Reading", icon: "📚" },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-20">
          <SectionHeader />

          {/* Technical Skills */}
          <TechnicalSkills />

          {/* Personal Attributes */}
          <div className="space-y-8 md:space-y-12">
            <SubsectionHeader title="Personal" coloredWord="Strengths" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {personalAttributes.map((attribute, index) => (
                <PersonalAttributeCard key={index} attribute={attribute} />
              ))}
            </div>
          </div>

          {/* Passions & Interests */}
          <div className="space-y-8 md:space-y-12">
            <SubsectionHeader title="Beyond" coloredWord="Code" />
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {passions.map((passion, index) => (
                <PassionCard key={index} passion={passion} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
