import type { ConnectLink } from "../homepage-data";

type ConnectSectionProps = {
  links: ConnectLink[];
};

export default function ConnectSection({ links }: ConnectSectionProps) {
  return (
    <section className="section-shell section-connect reveal" id="connect">
      <div className="shell connect-shell">
        <div className="connect-copy">
          <p className="section-kicker">Connect</p>
          <h2 className="section-title">
            If there&apos;s something worth building, let&apos;s talk.
          </h2>
          <p className="section-lead">
            I&apos;m interested in thoughtful product work, ambitious teams, and
            collaborations where engineering and taste both matter.
          </p>
        </div>

        <div className="connect-grid">
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
      </div>
    </section>
  );
}
