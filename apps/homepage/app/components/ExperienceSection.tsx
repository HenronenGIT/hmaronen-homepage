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

        <div className="experience-timeline">
          {items.map((item, index) => {
            const anchorYear = item.period.match(/\d{4}/)?.[0] ?? item.period;
            const side = index % 2 === 0 ? "left" : "right";
            const summary = item.description[0] ?? "";

            return (
              <article
                key={`${item.company}-${item.period}`}
                className={`experience-item experience-item-${side}`}
              >
                <div className="experience-track">
                  <div className="experience-node">
                    <span>{anchorYear}</span>
                  </div>
                </div>

                <div className="experience-panel">
                  <p className="experience-period">{item.period}</p>
                  <div className="experience-header">
                    <h3>{item.title}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>
                  <p className="experience-summary">{summary}</p>
                  <div className="tag-row experience-tags">
                    {item.technologies.map((technology) => (
                      <span key={technology} className="tag tag-outlined">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="experience-spacer" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
