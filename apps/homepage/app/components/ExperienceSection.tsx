"use client";

import { useState } from "react";
import { useReveal } from "../hooks/use-reveal";
import type { ExperienceItem } from "../homepage-data";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  const ref = useReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const active = items[activeIndex];

  const handleTabClick = (i: number) => {
    setDirection(i > activeIndex ? "down" : "up");
    setActiveIndex(i);
  };

  return (
    <section ref={ref} className="section-shell reveal" id="work">
      <div className="shell">
        <div className="section-heading section-heading-narrow">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Journey so far.</h2>
        </div>

        <div className="experience-tab-layout">
          <nav className="experience-tab-nav" aria-label="Experience entries">
            {items.map((item, i) => (
              <button
                key={`${item.company}-${item.period}`}
                className={`experience-tab-btn${i === activeIndex ? ` experience-tab-btn-active experience-tab-btn-${direction}` : ""}`}
                onClick={() => handleTabClick(i)}
                aria-selected={i === activeIndex}
              >
                <span className="experience-tab-period">{item.period}</span>
                <span className="experience-tab-title">{item.title}</span>
                <span className="experience-tab-company">{item.company}</span>
              </button>
            ))}
          </nav>

          <div key={activeIndex} className="experience-tab-panel">
            <p className="experience-period">{active.period}</p>
            <div className="experience-header">
              <h3>{active.title}</h3>
              <p className="experience-company">{active.company}</p>
            </div>
            <ul className="experience-bullets">
              {active.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="tag-row experience-tags">
              {active.technologies.map((tech) => (
                <span key={tech} className="tag tag-outlined">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
