import Navigation from "@/components/Navigation";
import ThoughtFilters from "@/components/thoughts/ThoughtFilters";
import Tag from "@/components/ui/Tag";
import { SectionTitle, Typography } from "@/components/ui/Typography";
import { COLORS } from "@/constants/colors";
import { useThoughtFilters, type Thought } from "@/hooks/use-thought-filters";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Background styles similar to Hero section
const THOUGHTS_BACKGROUND_STYLES = {
  background: `
    radial-gradient(circle at 20% 80%, ${COLORS.primary}15 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${COLORS.primary}10 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${COLORS.primaryHover}08 0%, transparent 50%),
    linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)
  `,
};

const Thoughts = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    filters,
    filteredThoughts,
    allTags,
    updateSearchTerm,
    updateSelectedTags,

    updateSortBy,
    resetFilters,
    hasActiveFilters,
    resultCount,
  } = useThoughtFilters(thoughts);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const modules = import.meta.glob("/src/thoughts/*.md", {
          query: "?raw",
          import: "default",
        });

        const thoughtsData = await Promise.all(
          Object.entries(modules).map(async ([path, resolver]) => {
            const rawContent = await resolver();
            const { data, content } = matter(rawContent);
            const slug = path.split("/").pop()!.replace(/\.md$/, "");
            const rawDate = new Date(data.date);

            return {
              slug,
              title: data.title,
              date: rawDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              rawDate,
              tags: data.tags || [],
              content: content.substring(0, 150) + "...",
            };
          })
        );

        setThoughts(thoughtsData);
      } catch (error) {
        console.error("Failed to load thoughts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchThoughts();
  }, []);

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden relative"
      style={THOUGHTS_BACKGROUND_STYLES}
    >
      <div className="relative z-10">
        <Navigation />
        <div className="container mx-auto px-4 py-16 pt-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <SectionTitle className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Thoughts
              </SectionTitle>
            </div>

            {/* Filters */}
            {!loading && (
              <ThoughtFilters
                filters={filters}
                allTags={allTags}
                resultCount={resultCount}
                hasActiveFilters={hasActiveFilters}
                onSearchChange={updateSearchTerm}
                onTagsChange={updateSelectedTags}
                onSortChange={updateSortBy}
                onResetFilters={resetFilters}
              />
            )}

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div
                  className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                  style={{ borderColor: COLORS.primary }}
                ></div>
                <Typography variant="body-large" className="text-gray-300">
                  Loading thoughts...
                </Typography>
              </div>
            )}

            {/* No Results State */}
            {!loading && filteredThoughts.length === 0 && hasActiveFilters && (
              <div className="text-center py-12">
                <Typography
                  variant="h2"
                  className="text-2xl font-bold mb-4 text-gray-300"
                >
                  No thoughts found
                </Typography>
                <Typography variant="body-large" className="text-gray-400 mb-6">
                  Try adjusting your filters to see more results.
                </Typography>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-lg border transition-all hover:scale-105"
                  style={{
                    backgroundColor: COLORS.primaryAlpha[10],
                    borderColor: COLORS.primaryAlpha[30],
                    color: COLORS.primary,
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* Thoughts List */}
            {!loading && filteredThoughts.length > 0 && (
              <div className="space-y-12">
                {filteredThoughts.map((thought, index) => (
                  <article key={thought.slug} className="group">
                    <Link
                      to={`/thoughts/${thought.slug}`}
                      className="block transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                    >
                      {/* Date and Tags */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <time
                          className="text-sm font-medium text-gray-400 uppercase tracking-wider font-heading"
                          dateTime={thought.date}
                        >
                          {thought.date}
                        </time>
                        <div className="flex flex-wrap gap-2">
                          {thought.tags.map((tag) => (
                            <Tag key={tag} variant="primary">
                              {tag}
                            </Tag>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <Typography
                        variant="h2"
                        className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:opacity-80 transition-opacity font-heading"
                      >
                        {thought.title}
                      </Typography>

                      {/* Preview */}
                      <Typography
                        variant="body-small"
                        className="text-gray-400 leading-relaxed font-sans"
                      >
                        {thought.content}
                      </Typography>
                    </Link>

                    {/* Separator */}
                    {index < filteredThoughts.length - 1 && (
                      <div
                        className="mt-12 border-b"
                        style={{ borderColor: COLORS.primaryAlpha[10] }}
                      />
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
