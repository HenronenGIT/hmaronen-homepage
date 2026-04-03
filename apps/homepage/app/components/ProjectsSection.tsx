import Image from "next/image";
import type { ProjectItem } from "../homepage-data";

type ProjectsSectionProps = {
  items: ProjectItem[];
};

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section className="section-shell section-projects reveal" id="projects">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">
            A few things I&apos;ve built outside the main lane.
          </h2>
        </div>

        <div className="project-grid">
          {items.map((item) => (
            <article key={item.name} className="project-card">
              <div className="project-media">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={1200}
                    height={900}
                    className="project-image"
                  />
                ) : (
                  <div className="project-placeholder">
                    <p>{item.name}</p>
                    <span>{item.category}</span>
                  </div>
                )}
                <div className="project-badge">{item.eyebrow}</div>
              </div>

              <div className="project-content">
                <p className="eyebrow-label">{item.category}</p>
                <h3>{item.name}</h3>
                <p className="project-copy">{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag tag-outlined">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="button button-charcoal button-small"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project
                  </a>
                  {item.secondaryHref && item.secondaryLabel ? (
                    <a
                      className="button button-outline button-small"
                      href={item.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.secondaryLabel}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
