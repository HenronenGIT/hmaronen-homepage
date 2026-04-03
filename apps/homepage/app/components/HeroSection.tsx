import Image from "next/image";

type HeroSectionProps = {
  highlights: readonly string[];
};

export default function HeroSection({ highlights }: HeroSectionProps) {
  return (
    <section className="hero-section section-shell reveal" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">Henri Maronen</p>
          <div className="hero-heading-wrap">
            <p className="hero-pretitle">Creative engineer</p>
            <h1 className="hero-title">
              Building digital products
              <span> with warmth, clarity, and intent.</span>
            </h1>
          </div>
          <p className="hero-summary">
            I build full-stack web applications from idea to production, with a
            strong bias toward thoughtful interfaces, reliable systems, and work
            that helps teams move with confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-charcoal" href="#projects">
              View projects
            </a>
            <a className="button button-accent" href="#connect">
              Let&apos;s connect
            </a>
          </div>
          <ul className="hero-highlights" aria-label="Core strengths">
            {highlights.map((item) => (
              <li key={item} className="hero-highlight-chip">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-frame">
            <div className="hero-portrait-note">
              Product-minded.
              <br />
              Engineering-led.
            </div>
            <Image
              src="/images/homepage-portrait.png"
              alt="Portrait of Henri Maronen"
              width={1280}
              height={1280}
              priority
              className="hero-portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
