import type { ExperienceItem } from "../homepage-data";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className="section-shell reveal" id="work">
      <div className="shell">
        <div className="section-heading section-heading-narrow">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">
            Building inside teams with real momentum.
          </h2>
        </div>

        <div className="experience-list">
          {items.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="experience-card"
            >
              <div className="experience-period">{item.period}</div>
              <div className="experience-body">
                <div className="experience-header">
                  <p className="eyebrow-label">{item.company}</p>
                  <h3>
                    {item.title}
                    <span>{item.company}</span>
                  </h3>
                </div>
                <div className="body-stack body-stack-tight">
                  {item.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="tag-row">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="tag tag-accent">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
