import type { SkillGroup } from "../homepage-data";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section className="section-shell section-surface reveal" id="skills">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Arsenal.</h2>
        </div>

        <div className="skills-grid">
          {groups.map((group) => (
            <article key={group.title} className="skill-card">
              <p className="eyebrow-label">{group.title}</p>
              <br />
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
