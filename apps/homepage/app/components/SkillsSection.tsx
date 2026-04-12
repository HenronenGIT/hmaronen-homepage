"use client";

import { useReveal } from "../hooks/use-reveal";
import type { SkillGroup } from "../homepage-data";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="section-shell reveal" id="skills">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Arsenal.</h2>
        </div>

        <div className="skills-grid">
          {groups.map((group, i) => (
            <article key={group.title} className="skill-card">
              <header className="skill-card-header">
                <p className="eyebrow-label">{group.title}</p>
                <span className="skill-card-num">0{i + 1}</span>
              </header>
              <div className="tag-row skill-tag-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
