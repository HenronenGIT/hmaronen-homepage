"use client";

import { useReveal } from "../hooks/use-reveal";
import type { ArchiveLink, SocialLink } from "../homepage-data";

type SiteFooterProps = {
  archiveLink: ArchiveLink;
  socialLinks: SocialLink[];
};

export default function SiteFooter({
  archiveLink,
  socialLinks,
}: SiteFooterProps) {
  const ref = useReveal<HTMLElement>();
  const year = new Date().getFullYear();
  const footerLinks = socialLinks.filter((link) =>
    link.href.startsWith("http")
  );

  return (
    <footer
      ref={ref}
      className="site-footer section-shell reveal"
      aria-label="Footer"
    >
      <div className="shell footer-shell">
        <div className="footer-copy">
          <p className="footer-signoff">Henri Maronen</p>
          <p className="footer-note">
            Built with care in Helsinki. Thanks for stopping by.
          </p>
        </div>

        <div className="footer-meta">
          <nav className="footer-links" aria-label="Footer links">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
            <a className="footer-link footer-link-accent" href="#top">
              Back to top
            </a>
          </nav>
          <p className="footer-copyright">{year} Portfolio</p>
        </div>

        <div className="footer-archive">
          <a
            href={archiveLink.href}
            target="_blank"
            rel="noreferrer"
            className="footer-archive-link"
          >
            {archiveLink.label}
          </a>
          <p className="footer-archive-note">{archiveLink.note}</p>
        </div>
      </div>
    </footer>
  );
}
