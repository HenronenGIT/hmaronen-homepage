import type { InfoCardItem } from "../homepage-data";

type AboutSectionProps = {
  paragraphs: readonly string[];
  cards: InfoCardItem[];
};

export default function AboutSection({ paragraphs, cards }: AboutSectionProps) {
  return (
    <section className="section-shell reveal" id="about">
      <div className="shell section-grid">
        <div className="section-copy">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Who I am when the work gets real.</h2>
          <div className="body-stack">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="info-card-stack">
          {cards.map((card) => {
            const content = (
              <article key={card.label} className="info-card">
                <p className="eyebrow-label">{card.label}</p>
                <h3>{card.value}</h3>
                {card.detail ? <p>{card.detail}</p> : null}
              </article>
            );

            if (!card.href) {
              return content;
            }

            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="info-card-link"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
