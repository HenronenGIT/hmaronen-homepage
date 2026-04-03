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
          <h2 className="section-title">
            Technical range, shaped by product work.
          </h2>
          <p className="section-lead">
            The stack changes with the problem, but I&apos;m most energized by
            work that connects design judgment, product thinking, and reliable
            implementation.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((group) => (
            <article key={group.title} className="skill-card">
              <p className="eyebrow-label">{group.title}</p>
              <p className="skill-card-summary">{group.description}</p>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag tag-neutral">
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
