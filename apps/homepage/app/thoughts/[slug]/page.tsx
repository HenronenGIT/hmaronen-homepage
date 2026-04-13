import Link from "next/link";
import { getThought, getThoughtSlugs } from "../../lib/thoughts";

export async function generateStaticParams() {
  return getThoughtSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const thought = getThought(slug);
    return {
      title: `${thought.title} — Henri Maronen`,
      description: thought.excerpt,
    };
  } catch {
    return {};
  }
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thought = getThought(slug);

  return (
    <main className="thoughts-page">
      <div className="thoughts-article-shell">
        {/* Article header */}
        <header className="thoughts-article-header">
          <time className="thoughts-article-date" dateTime={thought.date}>
            {thought.formattedDate}
          </time>
          <h1 className="thoughts-article-title">{thought.title}</h1>
          {thought.tags.length > 0 && (
            <div className="thoughts-article-tags" aria-label="Tags">
              {thought.tags.map((tag) => (
                <span key={tag} className="thoughts-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article body */}
        <article
          className="thoughts-article-body"
          dangerouslySetInnerHTML={{ __html: thought.htmlContent }}
        />

        {/* Footer nav */}
        <footer className="thoughts-article-footer">
          <Link href="/thoughts" className="thoughts-article-back">
            <span aria-hidden="true">←</span>
            All thoughts
          </Link>
        </footer>
      </div>
    </main>
  );
}
