import type { CSSProperties } from "react";
import Link from "next/link";
import { getAllThoughts } from "../lib/thoughts";

export const metadata = {
  title: "Thoughts — Henri Maronen",
  description:
    "Writing on development, design, and the tools and ideas that shape how I build.",
};

export default function ThoughtsPage() {
  const thoughts = getAllThoughts();

  return (
    <main className="thoughts-page">
      <div className="thoughts-shell">
        {/* Masthead */}
        <div className="thoughts-hero">
          <p className="thoughts-hero-eyebrow">Writing</p>
          <h1 className="thoughts-hero-title">Thoughts</h1>
          <p className="thoughts-hero-sub">
            Notes on development, tools, and the slow accumulation of
            perspective.
          </p>
        </div>

        {/* List */}
        {thoughts.length === 0 ? (
          <p className="thoughts-empty">Nothing here yet. Check back soon.</p>
        ) : (
          <ol className="thoughts-list" role="list">
            {thoughts.map((thought, index) => (
              <li
                key={thought.slug}
                className="thoughts-entry"
                style={{ "--i": index } as CSSProperties}
              >
                <Link
                  href={`/thoughts/${thought.slug}`}
                  className="thoughts-entry-link"
                >
                  <h2 className="thoughts-entry-title">{thought.title}</h2>
                  {thought.tags.length > 0 && (
                    <div className="thoughts-entry-tags" aria-label="Tags">
                      {thought.tags.map((tag) => (
                        <span key={tag} className="thoughts-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="button-conic-wrapper">
                    <span className="button button-charcoal button-sm">
                      <span className="button-label">Read</span>
                      <span className="button-orb" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M5 12h12" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </main>
  );
}
