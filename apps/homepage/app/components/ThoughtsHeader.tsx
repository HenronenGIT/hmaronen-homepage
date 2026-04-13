import Link from "next/link";

export default function ThoughtsHeader() {
  return (
    <header className="thoughts-header" aria-label="Thoughts navigation">
      <div className="thoughts-header-inner">
        <Link
          href="/"
          className="thoughts-header-back"
          aria-label="Back to home"
        >
          <span className="thoughts-header-back-arrow" aria-hidden="true">
            ←
          </span>
          <span>Henri Maronen</span>
        </Link>
        <Link href="/thoughts" className="thoughts-header-label">
          Thoughts
        </Link>
      </div>
    </header>
  );
}
