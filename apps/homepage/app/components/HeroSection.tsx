import Image from "next/image";
import type { SocialLink } from "../homepage-data";

type HeroSectionProps = {
  socialLinks: SocialLink[];
};

export default function HeroSection({ socialLinks }: HeroSectionProps) {
  return (
    <section className="hero-section section-shell reveal" id="top">
      <div className="shell hero-shell hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">Henri Maronen</p>
          <div className="hero-heading-wrap">
            <h1 className="hero-title">
              <span className="hero-title-main">Developer</span>
              <span className="hero-title-accent">Brain.</span>
            </h1>
            <p className="hero-subtitle">Creator Mind.</p>
          </div>
          <p className="hero-summary">
            I build full-stack web applications from idea to production, with a
            strong bias toward thoughtful interfaces, reliable systems, and work
            that helps teams move with confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-charcoal" href="#projects">
              <span className="button-label">View projects</span>
              <span className="button-orb" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a className="button button-accent" href="#connect">
              <span className="button-label">Let&apos;s connect</span>
              <span className="button-orb" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="hero-socials" aria-label="Hero social links">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.href}
                  className="hero-social-button"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-frame">
            <div className="hero-portrait-note">Product-minded Engineer.</div>
            <div className="hero-portrait-crop">
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
      </div>
    </section>
  );
}

type SocialIconProps = {
  icon: SocialLink["icon"];
};

function SocialIcon({ icon }: SocialIconProps) {
  switch (icon) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.75 9.25V18" />
          <path d="M6.75 6.8a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1Z" />
          <path d="M11 18v-4.95c0-1.7 1.12-2.85 2.63-2.85 1.47 0 2.37.99 2.37 2.85V18" />
          <path d="M11 11.15V9.25" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.4 18.1c-3 .95-3-1.4-4.2-1.75" />
          <path d="M14.6 18.1v-2.32c0-.73.08-1.25-.32-1.65 1.9-.2 3.9-.93 3.9-4.25 0-.95-.34-1.73-.9-2.35.09-.23.39-1.11-.08-2.31 0 0-.74-.23-2.42.9a8.3 8.3 0 0 0-4.36 0c-1.68-1.13-2.42-.9-2.42-.9-.47 1.2-.17 2.08-.08 2.31-.56.62-.9 1.4-.9 2.35 0 3.31 1.99 4.05 3.89 4.25-.31.31-.42.69-.42 1.23v2.74" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4.75" y="4.75" width="14.5" height="14.5" rx="4" />
          <circle cx="12" cy="12" r="3.35" />
          <circle
            cx="16.85"
            cy="7.15"
            r="0.9"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.75" y="6.5" width="16.5" height="11" rx="2" />
          <path d="m5.2 8.15 6.8 5.15 6.8-5.15" />
        </svg>
      );
  }
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h12" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
