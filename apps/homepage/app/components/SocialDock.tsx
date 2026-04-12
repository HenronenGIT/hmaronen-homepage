import type { SocialLink } from "../homepage-data";

type SocialDockProps = {
  links: SocialLink[];
};

export default function SocialDock({ links }: SocialDockProps) {
  return (
    <>
      <aside
        className="social-dock social-dock-desktop"
        aria-label="Social links"
      >
        {links.map((link) => (
          <a
            key={link.href}
            className="social-chip"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </aside>

      <div className="social-dock social-dock-mobile" aria-label="Social links">
        {links.map((link) => (
          <a
            key={link.href}
            className="social-chip"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
