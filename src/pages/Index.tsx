
import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import CTA from "../components/CTA";

const Index = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ backgroundColor: "#1A1A1B" }}
    >
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
  );
};

export default Index;
