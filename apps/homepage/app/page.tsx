import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SkillsSection from "./components/SkillsSection";
import {
  aboutParagraphs,
  archiveLink,
  connectLinks,
  experiences,
  infoCards,
  navItems,
  projects,
  skillGroups,
  socialLinks,
} from "./homepage-data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader items={navItems} />
      <div className="split-layout">
        <div className="split-left">
          <HeroSection socialLinks={socialLinks} />
        </div>
        <div className="split-right">
          <div className="split-intro-type">
            <div className="split-intro-words">
              <span className="split-intro-word split-intro-word-1">Idea</span>
              <span className="split-intro-word split-intro-word-2">to</span>
              <span className="split-intro-word split-intro-word-3">
                Production.
              </span>
            </div>
            <div className="split-intro-rule" aria-hidden="true" />
            <p className="split-intro-body">
              I build digital products end-to-end, from database schemas to user
              interfaces, with a focus on scalability and long-term ownership.
              My standard isn&apos;t just to ship, but to create something that
              others can pick up, extend, and take further.
            </p>
          </div>
          <SkillsSection groups={skillGroups} />
          {/* <AboutSection paragraphs={aboutParagraphs} cards={infoCards} /> */}
          <ExperienceSection items={experiences} />
          <ProjectsSection items={projects} />
          <ConnectSection links={connectLinks} />
          <SiteFooter archiveLink={archiveLink} socialLinks={socialLinks} />
        </div>
      </div>
    </main>
  );
}
