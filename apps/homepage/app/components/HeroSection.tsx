"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useReveal } from "../hooks/use-reveal";
import type { SocialLink } from "../homepage-data";

type HeroSectionProps = {
  socialLinks: SocialLink[];
};

export default function HeroSection({ socialLinks }: HeroSectionProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="hero-section reveal" id="top">
      <div className="hero-copy">
        <p className="section-kicker">Henri Maronen</p>
        <div className="hero-heading-wrap">
          <h1 className="hero-title">
            <span className="hero-title-main">Developer</span>
            <span className="hero-title-accent">Brain.</span>
          </h1>
          <p className="hero-subtitle">Creator Mind.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-accent" href="#connect">
            <span className="button-label">Connect</span>
            <span className="button-orb" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
          <div className="hero-socials" aria-label="Hero social links">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.href}
                  className="hero-social-wrapper"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                >
                  <span className="hero-social-button">
                    <SocialIcon icon={link.icon} />
                  </span>
                </a>
              );
            })}
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
      return <FaLinkedinIn aria-hidden="true" />;
    case "github":
      return <FaGithub aria-hidden="true" />;
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
