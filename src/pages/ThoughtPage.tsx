import Navigation from "@/components/Navigation";
import { Typography } from "@/components/ui/Typography";
import { COLORS } from "@/constants/colors";
import matter from "gray-matter";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Background styles similar to Hero section
const THOUGHT_BACKGROUND_STYLES = {
  background: `
    radial-gradient(circle at 20% 80%, ${COLORS.primary}15 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${COLORS.primary}10 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${COLORS.primaryHover}08 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
  `,
};

interface Thought {
  title: string;
  date: string;
  tags: string[];
  content: string;
}

const ThoughtPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [thought, setThought] = useState<Thought | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThought = async () => {
      try {
        const rawContent = await import(`../thoughts/${slug}.md?raw`);
        const { data, content } = matter(rawContent.default);

        setThought({
          title: data.title,
          date: new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          tags: data.tags || [],
          content: marked(content) as string,
        });
      } catch (error) {
        console.error("Failed to load thought:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchThought();
    }
  }, [slug]);

  if (loading) {
    return (
      <div
        className="min-h-screen text-white flex items-center justify-center"
        style={THOUGHT_BACKGROUND_STYLES}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
            style={{ borderColor: COLORS.primary }}
          ></div>
          <Typography variant="body-large" className="text-gray-300">
            Loading...
          </Typography>
        </div>
      </div>
    );
  }

  if (!thought) {
    return (
      <div
        className="min-h-screen text-white flex items-center justify-center"
        style={THOUGHT_BACKGROUND_STYLES}
      >
        <div className="text-center">
          <Typography variant="h2" className="text-2xl font-bold mb-4">
            Thought not found
          </Typography>
          <Link
            to="/thoughts"
            className="inline-flex items-center gap-2 text-sm hover:underline transition-all duration-300"
            style={{ color: COLORS.primary }}
          >
            <ArrowLeft size={16} />
            Back to thoughts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden relative"
      style={THOUGHT_BACKGROUND_STYLES}
    >
      <div className="relative z-10">
        <Navigation />
        <div className="container mx-auto px-4 py-16 pt-32">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-sm mb-8 hover:underline transition-all duration-300 group"
              style={{ color: COLORS.primary }}
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to thoughts
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-6">
                <time
                  className="text-sm font-medium text-gray-400 uppercase tracking-wider font-heading"
                  dateTime={thought.date}
                >
                  {thought.date}
                </time>
              </div>

              <Typography
                variant="h1"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading leading-tight"
              >
                {thought.title}
              </Typography>

              {thought.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {thought.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full border transition-all duration-300 hover:scale-105 font-sans"
                      style={{
                        backgroundColor: COLORS.primaryAlpha[10],
                        borderColor: COLORS.primaryAlpha[30],
                        color: COLORS.primary,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content */}
            <article
              className="prose prose-lg dark:prose-invert max-w-2xl mx-auto
                prose-headings:text-white prose-headings:font-heading
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-sans prose-p:my-8
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-em:text-gray-200
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-primary/20
                prose-blockquote:border-l-primary prose-blockquote:text-gray-300
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:text-gray-300"
              style={
                {
                  "--tw-prose-body": "#d1d5db",
                  "--tw-prose-headings": "#ffffff",
                  "--tw-prose-links": COLORS.primary,
                  "--tw-prose-bold": "#ffffff",
                  "--tw-prose-counters": COLORS.primary,
                  "--tw-prose-bullets": COLORS.primary,
                  "--tw-prose-hr": COLORS.primaryAlpha[20],
                  "--tw-prose-quotes": "#d1d5db",
                  "--tw-prose-quote-borders": COLORS.primary,
                  "--tw-prose-quote-text": COLORS.primary,
                  "--tw-prose-captions": "#9ca3af",
                  "--tw-prose-code": COLORS.primary,
                  "--tw-prose-pre-code": "#e5e7eb",
                  "--tw-prose-pre-bg": "#111827",
                  "--tw-prose-th-borders": COLORS.primaryAlpha[30],
                  "--tw-prose-td-borders": COLORS.primaryAlpha[20],
                } as React.CSSProperties
              }
              dangerouslySetInnerHTML={{ __html: thought.content }}
            />

            {/* Bottom navigation */}
            <div
              className="mt-16 pt-8 border-t"
              style={{ borderColor: COLORS.primaryAlpha[10] }}
            >
              <Link
                to="/thoughts"
                className="inline-flex items-center gap-2 text-sm hover:underline transition-all duration-300 group"
                style={{ color: COLORS.primary }}
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back to all thoughts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtPage;
