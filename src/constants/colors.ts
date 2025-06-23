// Color System Configuration
// This file contains all colors used throughout the project

export const COLORS = {
  // Primary Brand Color
  primary: "#4FD1C7", // Main teal/turquoise color
  primaryHover: "#3FBDB3", // Darker version for hover states

  // Primary color with transparency
  primaryAlpha: {
    5: "rgba(79, 209, 199, 0.05)",
    10: "rgba(79, 209, 199, 0.1)",
    15: "rgba(79, 209, 199, 0.15)",
    20: "rgba(79, 209, 199, 0.2)",
    25: "rgba(79, 209, 199, 0.25)",
    30: "rgba(79, 209, 199, 0.3)",
  },

  // Gradient variations
  gradients: {
    primary: "linear-gradient(135deg, rgba(79, 209, 199, 0.1) 0%, rgba(175, 235, 231, 0.05) 100%)",
    primaryMedium: "linear-gradient(135deg, rgba(79, 209, 199, 0.15) 0%, rgba(175, 235, 231, 0.15) 100%)",
    primaryStrong: "linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)",
  },

  // Background colors
  background: {
    main: "#1A1A1B", // Main dark background
    section: "rgba(79, 209, 199, 0.05)", // Light teal background for sections
  },

  // Social media brand colors
  social: {
    linkedin: "#0077B5",
  },

  // Development/CSS variables (from App.css)
  dev: {
    react: "#61dafbaa",
    vite: "#646cffaa",
  },

  // Box shadow utilities
  shadows: {
    primary: "0 10px 25px rgba(79, 209, 199, 0.25)",
    primaryMedium: "0 15px 30px rgba(79, 209, 199, 0.2)",
    primaryStrong: "0 20px 40px rgba(79, 209, 199, 0.15)",
  },
} as const;

// Helper function to get rgba color with custom alpha
export const withAlpha = (color: string, alpha: number): string => {
  // Convert hex to rgba
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color;
};

// Export individual colors for easier importing
export const {
  primary,
  primaryHover,
  primaryAlpha,
  gradients,
  background,
  social,
  shadows,
} = COLORS;