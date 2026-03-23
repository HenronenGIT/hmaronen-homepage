import { useState } from "react";
import GlassButton from "@/components/ui/GlassButton";
import photoPortfolioImage from "@/assets/images/photo-portfolio-image.jpg";
import { COLORS } from "@/constants/colors";

const feedItems = [
  {
    icon: "T",
    iconBg: "#d4a017", // r/technology brand color
    source: "r/technology",
    headline:
      "Robot dogs priced at $300,000 are now guarding the country's biggest data centers",
    upvotes: "8,152",
    comments: "1,165",
  },
  {
    icon: "Y",
    iconBg: "#ff6600", // Hacker News brand color
    source: "Hacker News",
    headline:
      "Ask HN: What's the most underrated productivity tool you use daily?",
    upvotes: "3,410",
    comments: "482",
  },
  {
    icon: "TC",
    iconBg: "#e84545", // TechCrunch brand color
    source: "TechCrunch RSS",
    headline:
      "OpenAI launches new developer tools for building agentic workflows",
    upvotes: "2,870",
    comments: "214",
  },
];

// Gradient border that works with border-radius:
// `padding-box` clips the card bg to inside the border,
// `border-box` fills the 1px border with the teal gradient.
function cardBorderStyle(
  hovered: boolean,
  cardBg: string
): React.CSSProperties {
  const gradient = hovered
    ? `linear-gradient(90deg, ${COLORS.primaryAlpha[10]} 0%, ${COLORS.primaryAlpha[80]} 100%)`
    : `linear-gradient(90deg, ${COLORS.primaryAlpha[80]} 0%, ${COLORS.primaryAlpha[20]} 100%)`;
  return {
    background: `linear-gradient(${cardBg}, ${cardBg}) padding-box, ${gradient} border-box`,
    border: "1px solid transparent",
    borderRadius: 20,
    transition:
      "background 0.3s ease-in-out, box-shadow 0.25s, transform 0.25s",
  };
}

function BreefliCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="overflow-hidden cursor-pointer"
      style={{
        ...cardBorderStyle(hovered, COLORS.card.dark),
        boxShadow: hovered ? COLORS.shadows.card : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual area */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          aspectRatio: "16/10",
          background: COLORS.surface.deepest,
          padding: "24px 28px 20px",
        }}
      >
        <div
          className="w-full rounded-[10px] overflow-hidden"
          style={{
            background: COLORS.card.dark,
            border: `1px solid ${COLORS.surface.subtle}`,
            boxShadow: COLORS.shadows.innerDark,
          }}
        >
          {/* Topbar */}
          <div
            className="flex items-center gap-[18px] px-4 py-[10px]"
            style={{
              background: COLORS.surface.deeper,
              borderBottom: `1px solid ${COLORS.surface.elevated}`,
            }}
          >
            <span
              className="font-bold mr-1"
              style={{
                fontSize: 13,
                letterSpacing: "-0.3px",
                color: COLORS.text.primary,
              }}
            >
              Breefli
            </span>
            <div className="flex gap-[2px]">
              {["Feed", "Library", "Trending", "Briefing"].map((tab) => (
                <div
                  key={tab}
                  className="rounded-full font-medium"
                  style={{
                    fontSize: 10,
                    padding: "4px 9px",
                    background:
                      tab === "Feed" ? COLORS.text.primary : "transparent",
                    color:
                      tab === "Feed" ? COLORS.card.dark : COLORS.text.subtle,
                    fontWeight: tab === "Feed" ? 600 : 500,
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          {/* Source bar */}
          <div
            className="flex gap-[14px] px-4 py-2 overflow-hidden"
            style={{
              background: COLORS.card.dark,
              borderBottom: `1px solid ${COLORS.surface.mid}`,
            }}
          >
            {[
              "All",
              "r/ExperiencedDevs",
              "Hacker News",
              "TechCrunch",
              "r/technology",
              "r/webdev",
            ].map((src) => (
              <div
                key={src}
                className="whitespace-nowrap font-medium"
                style={{
                  fontSize: 10,
                  color:
                    src === "All" ? COLORS.text.primary : COLORS.text.subtle,
                  paddingBottom: 4,
                  borderBottom:
                    src === "All" ? `1px solid ${COLORS.text.primary}` : "none",
                }}
              >
                {src}
              </div>
            ))}
          </div>
          {/* Feed */}
          <div>
            {feedItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-start gap-3 px-4 py-3"
                style={{
                  borderBottom:
                    i < feedItems.length - 1
                      ? `1px solid ${COLORS.surface.divider}`
                      : "none",
                }}
              >
                <div className="flex flex-col gap-[5px] flex-1">
                  <div className="flex items-center gap-[5px]">
                    <div
                      className="flex items-center justify-center flex-shrink-0 rounded-[3px] font-bold"
                      style={{
                        width: 14,
                        height: 14,
                        background: item.iconBg,
                        color: COLORS.text.primary,
                        fontSize: 8,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        color: COLORS.text.subtle,
                        fontWeight: 500,
                      }}
                    >
                      {item.source}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: COLORS.text.secondary,
                      lineHeight: 1.45,
                    }}
                  >
                    {item.headline}
                  </div>
                  <div
                    className="flex gap-2"
                    style={{ fontSize: 9, color: COLORS.text.dimmed }}
                  >
                    <span>↑ {item.upvotes}</span>
                    <span>💬 {item.comments}</span>
                  </div>
                </div>
                <div
                  className="self-center flex-shrink-0 font-semibold rounded-[6px]"
                  style={{
                    fontSize: 9,
                    background: COLORS.surface.subtle,
                    color: COLORS.text.muted,
                    padding: "4px 10px",
                  }}
                >
                  Read
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 28px 28px" }}>
        <div
          className="uppercase font-semibold mb-2"
          style={{
            fontSize: 11,
            letterSpacing: "1.2px",
            color: COLORS.text.subtle,
          }}
        >
          Web App
        </div>
        <div
          className="font-bold mb-[10px]"
          style={{
            fontSize: 22,
            letterSpacing: "-0.5px",
            color: COLORS.text.primary,
          }}
        >
          Breefli
        </div>
        <div
          className="mb-5"
          style={{ fontSize: 14, color: COLORS.text.muted, lineHeight: 1.65 }}
        >
          A personal news aggregator that pulls information from different
          sources and creates a daily briefing for you.
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {["React", "Node.js", "RSS", "Next.js"].map((tag) => (
            <span
              key={tag}
              className="font-medium rounded-full"
              style={{
                fontSize: 12,
                padding: "4px 10px",
                background: COLORS.surface.elevated,
                color: COLORS.text.tertiary,
                border: `1px solid ${COLORS.surface.border}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-[10px]">
          <GlassButton
            href="https://app.breefli.app"
            variant="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site →
          </GlassButton>
          <GlassButton
            href="https://github.com/HenronenGIT/breefli"
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </GlassButton>
        </div>
      </div>
    </div>
  );
}

function PhotographyCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="overflow-hidden cursor-pointer"
      style={{
        ...cardBorderStyle(hovered, COLORS.card.darkBlue.bg),
        boxShadow: hovered ? COLORS.shadows.card : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual area */}
      <div
        className="w-full relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={photoPortfolioImage}
          alt="Photography portfolio"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text legibility */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "40%",
            background: `linear-gradient(0deg, ${COLORS.overlay.dark} 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "24px 28px 28px" }}>
        <div
          className="uppercase font-semibold mb-2"
          style={{
            fontSize: 11,
            letterSpacing: "1.2px",
            color: COLORS.card.darkBlue.label,
          }}
        >
          Photography
        </div>
        <div
          className="font-bold mb-[10px]"
          style={{
            fontSize: 22,
            letterSpacing: "-0.5px",
            color: COLORS.card.darkBlue.title,
          }}
        >
          Photography Portfolio
        </div>
        <div
          className="mb-5"
          style={{
            fontSize: 14,
            color: COLORS.card.darkBlue.subtitle,
            lineHeight: 1.65,
          }}
        >
          A full-stack photography portfolio with a custom GCS + Cloudflare
          image delivery pipeline, WebP thumbnail generation, and a stand-alone
          Go backend.
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {[
            "Go",
            "Cloudflare",
            "GCS",
            "GCP",
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
          ].map((tag) => (
            <span
              key={tag}
              className="font-medium rounded-full"
              style={{
                fontSize: 12,
                padding: "4px 10px",
                background: COLORS.card.darkBlue.tagBg,
                color: COLORS.card.darkBlue.tagText,
                border: `1px solid ${COLORS.card.darkBlue.tagBorder}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <GlassButton
          href="https://photos.henrimaronen.com/"
          variant="primary"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Gallery →
        </GlassButton>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p
            className="uppercase font-semibold mb-5"
            style={{
              fontSize: 12,
              letterSpacing: "1.5px",
              color: COLORS.text.faint,
            }}
          >
            Side Projects
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: 36,
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: COLORS.text.primary,
            }}
          >
            A few projects I’ve worked on.
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BreefliCard />
          <PhotographyCard />
        </div>
      </div>
    </section>
  );
}
