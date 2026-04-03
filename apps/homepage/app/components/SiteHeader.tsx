import type { NavItem } from "../homepage-data";

type SiteHeaderProps = {
  items: NavItem[];
};

export default function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="shell header-shell">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          <span className="brand-mark-monogram">HM</span>
          <span className="brand-mark-text">
            Henri
            <br />
            Maronen
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          {items.map((item) => (
            <a key={item.href} className="header-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
