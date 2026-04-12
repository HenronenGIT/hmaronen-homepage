"use client";

import { useReveal } from "../hooks/use-reveal";
import type { ConnectLink } from "../homepage-data";

type ConnectSectionProps = {
  links: ConnectLink[];
};

export default function ConnectSection({ links }: ConnectSectionProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="section-shell section-connect reveal"
      id="connect"
    >
      <div className="shell connect-shell">
        <div className="connect-copy">
          <p className="section-kicker">Connect</p>
          <h2 className="section-title">
            If there&apos;s something worth building, let&apos;s chat.
          </h2>
          {/* <p className="section-lead">
            I&apos;m interested in thoughtful product work, ambitious teams, and
            collaborations where engineering and taste both matter.
          </p> */}
        </div>

        <div className="connect-layout">
          <div className="connect-card-stack">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="connect-card"
              >
                <p className="eyebrow-label">{link.label}</p>
                <h3>{link.label}</h3>
                <p>{link.note}</p>
                <span className="connect-action">Open</span>
              </a>
            ))}
          </div>

          {/*
          <div className="contact-form-panel">
            <div className="contact-form-copy">
              <p className="eyebrow-label">Email</p>
              <h3>Send a thoughtful note.</h3>
              <p>
                Share a project, an opportunity, or an idea worth building. The
                form opens your email app with everything drafted for you.
              </p>
            </div>

            <form className="contact-form">
              <label className="contact-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>

              <label className="contact-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>

              <label className="contact-field">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What are we talking about?"
                />
              </label>

              <label className="contact-field">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="A few details about the idea, team, or opportunity."
                  rows={6}
                  required
                />
              </label>

              <div className="contact-form-footer">
                <p>
                  Prefer direct email?{" "}
                  <a
                    href="mailto:henrimaronen@gmail.com"
                    className="contact-inline-link"
                  >
                    henrimaronen@gmail.com
                  </a>
                </p>

                <button type="submit" className="button button-accent">
                  <span className="button-label">Draft email</span>
                  <span className="button-orb" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h12" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
