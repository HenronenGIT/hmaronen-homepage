import { useState } from "react";
import { COLORS } from "../constants/colors";

interface Skill {
  name: string;
  cat: "frontend" | "backend" | "tools";
  row: 1 | 2 | 3;
}

const skills: Skill[] = [
  // Row 1 — primary
  { name: "React", cat: "frontend", row: 1 },
  { name: "TypeScript", cat: "frontend", row: 1 },
  { name: "Node.js", cat: "backend", row: 1 },
  { name: "PostgreSQL", cat: "backend", row: 1 },
  { name: "Next.js", cat: "frontend", row: 1 },
  { name: "Docker", cat: "backend", row: 1 },
  { name: "Tailwind CSS", cat: "frontend", row: 1 },
  { name: "REST APIs", cat: "backend", row: 1 },
  // Row 2 — secondary
  { name: "Vite", cat: "frontend", row: 2 },
  { name: "Python", cat: "backend", row: 2 },
  { name: "Google Cloud", cat: "backend", row: 2 },
  { name: "Figma", cat: "tools", row: 2 },
  { name: "Git", cat: "tools", row: 2 },
  { name: "AI Dev Tools", cat: "tools", row: 2 },
  { name: "Cursor", cat: "tools", row: 2 },
  { name: "Claude", cat: "tools", row: 2 },

  // Row 3 — tertiary
  { name: "DataGrip", cat: "tools", row: 3 },
  { name: "Notion", cat: "tools", row: 3 },
  { name: "ESLint", cat: "tools", row: 3 },
  { name: "Prettier", cat: "frontend", row: 3 },
  { name: "Zod", cat: "frontend", row: 3 },
  { name: "Vercel", cat: "backend", row: 3 },
  { name: "Styled Components", cat: "frontend", row: 3 },
  { name: "Go", cat: "backend", row: 3 },
  { name: "Postman", cat: "tools", row: 2 },
  { name: "Perplexity", cat: "tools", row: 3 },
];

const FILTER_TABS = ["All", "Frontend", "Backend", "Tools"] as const;
type Filter = (typeof FILTER_TABS)[number];

const pillBaseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  padding: "9px 16px",
  borderRadius: "100px",
  fontSize: "13.5px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  flexShrink: 0,
  letterSpacing: "-0.2px",
  border: "1px solid transparent",
  transition:
    "opacity 0.25s ease, transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease",
  cursor: "default",
};

function rowPillStyle(
  row: 1 | 2 | 3,
  isFiltered: boolean,
  isMatch: boolean
): React.CSSProperties {
  if (isFiltered && isMatch) {
    return {
      ...pillBaseStyle,
      background: COLORS.primaryAlpha[15],
      color: COLORS.primary,
      borderColor: COLORS.primaryAlpha[30],
      opacity: 1,
      transform: "scale(1)",
    };
  }
  if (isFiltered && !isMatch) {
    return {
      ...pillBaseStyle,
      opacity: 0.1,
      transform: "scale(0.97)",
      ...(row === 1
        ? {
            background: COLORS.primaryAlpha[15],
            color: COLORS.primary,
            borderColor: COLORS.primaryAlpha[30],
          }
        : row === 2
          ? {
              background: "transparent",
              color: COLORS.text.muted,
              borderColor: COLORS.surface.border,
            }
          : {
              background: COLORS.surface.subtle,
              color: COLORS.text.muted,
              borderColor: COLORS.surface.elevated,
            }),
    };
  }
  // Default unfiltered
  if (row === 1) {
    return {
      ...pillBaseStyle,
      background: COLORS.primaryAlpha[15],
      color: COLORS.primary,
      borderColor: COLORS.primaryAlpha[30],
    };
  }
  if (row === 2) {
    return {
      ...pillBaseStyle,
      background: "transparent",
      color: COLORS.text.muted,
      borderColor: COLORS.surface.border,
    };
  }
  return {
    ...pillBaseStyle,
    background: COLORS.surface.subtle,
    color: COLORS.text.muted,
    borderColor: COLORS.surface.elevated,
  };
}

function dotColor(row: 1 | 2 | 3, isFiltered: boolean, isMatch: boolean) {
  if (isFiltered && isMatch) return COLORS.primaryAlpha[30];
  if (row === 1) return COLORS.primaryAlpha[30];
  if (row === 2) return COLORS.surface.border;
  return COLORS.text.subtle;
}

interface MarqueeRowProps {
  rowNum: 1 | 2 | 3;
  activeFilter: Filter;
}

const MarqueeRow = ({ rowNum, activeFilter }: MarqueeRowProps) => {
  const rowSkills = skills.filter((s) => s.row === rowNum);
  const doubled = [...rowSkills, ...rowSkills, ...rowSkills];
  const isFiltered = activeFilter !== "All";
  const animClass = `marquee-row-${rowNum}`;
  const bgColor = COLORS.background.main;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "7px 0",
      }}
    >
      {/* Fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 120,
          background: `linear-gradient(90deg, ${bgColor} 20%, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 120,
          background: `linear-gradient(-90deg, ${bgColor} 20%, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className={`${animClass} ${isFiltered ? "marquee-paused" : ""}`}
        style={{ display: "flex", gap: 10, width: "max-content" }}
      >
        {doubled.map((skill, i) => {
          const isMatch =
            isFiltered && skill.cat === activeFilter.toLowerCase();
          return (
            <span
              key={`${skill.name}-${i}`}
              style={rowPillStyle(rowNum, isFiltered, isMatch)}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: dotColor(rowNum, isFiltered, isMatch),
                }}
              />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const SkillsMarquee = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const uniqueCount =
    activeFilter === "All"
      ? 0
      : skills.filter((s) => s.cat === activeFilter.toLowerCase()).length;

  return (
    <div className="space-y-0">
      {/* Header row */}
      <div className="flex items-center justify-between pb-9">
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: COLORS.text.muted,
          }}
        >
          Technical Stack
        </span>

        {/* Filter tabs */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "6px 13px",
                  borderRadius: 100,
                  border: `1px solid ${isActive ? COLORS.primaryAlpha[30] : COLORS.surface.border}`,
                  background: isActive
                    ? COLORS.primaryAlpha[15]
                    : "transparent",
                  color: isActive ? COLORS.primary : COLORS.text.muted,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  letterSpacing: "-0.1px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = COLORS.text.subtle;
                    e.currentTarget.style.color = COLORS.text.secondary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = COLORS.surface.border;
                    e.currentTarget.style.color = COLORS.text.muted;
                  }
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Marquee rows */}
      <MarqueeRow rowNum={1} activeFilter={activeFilter} />
      <MarqueeRow rowNum={2} activeFilter={activeFilter} />
      <MarqueeRow rowNum={3} activeFilter={activeFilter} />

      {/* Status bar */}
      <div
        style={{
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          gap: 8,
          paddingTop: 16,
        }}
      >
        {activeFilter !== "All" && (
          <>
            <span style={{ fontSize: 12, color: COLORS.text.muted }}>
              Showing {activeFilter} skills —
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: COLORS.text.primary,
                background: COLORS.surface.subtle,
                padding: "2px 8px",
                borderRadius: 10,
              }}
            >
              {uniqueCount} technologies
            </span>
            <button
              onClick={() => setActiveFilter("All")}
              style={{
                fontSize: 12,
                color: COLORS.text.muted,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px 0",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              Clear filter
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SkillsMarquee;
