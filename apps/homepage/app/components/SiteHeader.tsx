"use client";

import { useState } from "react";
import type { NavItem } from "../homepage-data";

type SiteHeaderProps = {
  items: NavItem[];
};

export default function SiteHeader({ items }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="shell header-toggle-shell">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={`shell header-panel-shell ${isOpen ? "is-open" : ""}`}>
        <div className="header-shell" id="primary-menu">
          <a
            className="brand-mark"
            href="#top"
            aria-label="Back to top"
            onClick={handleLinkClick}
          >
            <span className="brand-mark-monogram">HM</span>
            <span className="brand-mark-text">
              Henri
              <br />
              Maronen
            </span>
          </a>

          <nav className="header-nav" aria-label="Primary navigation">
            {items.map((item) => (
              <a
                key={item.href}
                className="header-link"
                href={item.href}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
