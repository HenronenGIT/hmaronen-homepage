import { COLORS } from "../constants/colors";
import SkillsMarquee from "./SkillsMarquee";

const Skills = () => (
  <section className="py-12 md:py-24 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-gray-900/20">
    <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading">
          Technical <span style={{ color: COLORS.primary }}>Arsenal</span>
        </h2>
        <div
          className="w-20 h-1 mx-auto"
          style={{ backgroundColor: COLORS.primary }}
        />
      </div>
      <SkillsMarquee />
    </div>
  </section>
);

export default Skills;
