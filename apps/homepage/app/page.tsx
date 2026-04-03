import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SkillsSection from "./components/SkillsSection";
import SocialDock from "./components/SocialDock";
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
      <SocialDock links={socialLinks} />
      <HeroSection socialLinks={socialLinks} />
      <AboutSection paragraphs={aboutParagraphs} cards={infoCards} />
      <SkillsSection groups={skillGroups} />
      <ExperienceSection items={experiences} />
      <ProjectsSection items={projects} />
      <ConnectSection links={connectLinks} />
      <SiteFooter archiveLink={archiveLink} socialLinks={socialLinks} />
    </main>
  );
}
