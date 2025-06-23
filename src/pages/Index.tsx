import { COLORS } from "@/constants/colors";
import About from "../components/About";
import CTA from "../components/CTA";
import CursorEffect from "../components/CursorEffect";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import WorkExperience from "../components/WorkExperience";

const Index = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden relative"
      style={{ backgroundColor: COLORS.background.main }}
    >
      <CursorEffect />
      <div className="relative z-10">
        <Navigation />
        <SocialLinks />
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="work">
          <WorkExperience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <CTA />
      </div>
    </div>
  );
};

export default Index;
