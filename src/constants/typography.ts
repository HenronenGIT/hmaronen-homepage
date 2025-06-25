// Typography System Configuration
// This file contains all typography scales, styles, and presets used throughout the project

export const TYPOGRAPHY = {
  // Font families (already defined in Tailwind config)
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    heading: ["Montserrat", "sans-serif"],
  },

  // Font weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Text sizes with responsive breakpoints
  fontSize: {
    // Body text sizes
    xs: "text-xs", // 12px
    sm: "text-sm", // 14px
    base: "text-base", // 16px
    lg: "text-lg", // 18px
    xl: "text-xl", // 20px

    // Heading sizes
    "2xl": "text-2xl", // 24px
    "3xl": "text-3xl", // 30px
    "4xl": "text-4xl", // 36px
    "5xl": "text-5xl", // 48px
    "6xl": "text-6xl", // 60px
    "7xl": "text-7xl", // 72px
    "8xl": "text-8xl", // 96px
    "9xl": "text-9xl", // 128px

    // Responsive combinations
    responsive: {
      "sm-base": "text-sm md:text-base",
      "base-lg": "text-base md:text-lg",
      "lg-xl": "text-lg md:text-xl",
      "xl-2xl": "text-xl md:text-2xl",
      "2xl-3xl": "text-2xl md:text-3xl",
      "3xl-4xl": "text-3xl md:text-4xl",
      "4xl-5xl": "text-4xl md:text-5xl",
      "5xl-6xl": "text-5xl md:text-6xl",
      "6xl-8xl": "text-6xl md:text-8xl",
      "8xl-9xl": "text-8xl md:text-9xl lg:text-9xl",
    },
  },

  // Line heights
  lineHeight: {
    none: "leading-none", // 1
    tight: "leading-tight", // 1.25
    snug: "leading-snug", // 1.375
    normal: "leading-normal", // 1.5
    relaxed: "leading-relaxed", // 1.625
    loose: "leading-loose", // 2
  },

  // Letter spacing
  letterSpacing: {
    tighter: "tracking-tighter", // -0.05em
    tight: "tracking-tight", // -0.025em
    normal: "tracking-normal", // 0em
    wide: "tracking-wide", // 0.025em
    wider: "tracking-wider", // 0.05em
    widest: "tracking-widest", // 0.1em
  },

  // Typography presets for common text styles
  presets: {
    // Headings
    h1: "text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight font-heading",
    h2: "text-4xl md:text-5xl font-bold font-heading",
    h3: "text-3xl font-bold font-heading",
    h4: "text-2xl font-bold font-heading",
    h5: "text-xl font-bold font-heading",
    h6: "text-lg font-bold font-heading",

    // Section headings with responsive sizing
    "section-title": "text-5xl md:text-6xl font-bold font-heading",
    "section-subtitle": "text-3xl font-bold text-center font-heading",

    // Body text variants
    "body-large": "text-xl md:text-2xl text-gray-300 leading-relaxed font-sans",
    body: "text-lg text-gray-300 leading-relaxed font-sans",
    "body-small": "text-base text-gray-300 leading-relaxed font-sans",
    caption: "text-sm text-gray-400 font-sans",
    micro: "text-xs text-gray-400 font-sans",

    // Interactive elements
    button: "font-semibold font-sans",
    "button-small": "text-sm font-medium font-sans",
    link: "font-semibold hover:underline transition-all duration-300",
    "nav-link": "text-sm font-medium font-sans",

    // Special text styles
    tag: "text-sm font-medium font-sans",
    badge: "text-xs font-bold font-sans",
    label: "text-sm font-medium font-sans",
    metadata:
      "text-sm font-medium text-gray-400 uppercase tracking-wider font-heading",
    logo: "font-bold text-lg font-heading",

    // Color variants for different contexts
    "text-primary": "text-white",
    "text-secondary": "text-gray-300",
    "text-muted": "text-gray-400",
    "text-accent": "", // Will be styled with color: COLORS.primary
  },

  // Common text color combinations
  colors: {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-400",
    accent: "text-white", // Usually paired with color: COLORS.primary
    error: "text-red-400",
    success: "text-green-400",
    warning: "text-yellow-400",
  },
} as const;

// Helper function to combine typography classes
export const combineTypography = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

// Helper function to get preset with optional overrides
export const getTypographyPreset = (
  preset: keyof typeof TYPOGRAPHY.presets,
  overrides?: string
) => {
  const baseClasses = TYPOGRAPHY.presets[preset];
  return overrides ? combineTypography(baseClasses, overrides) : baseClasses;
};
