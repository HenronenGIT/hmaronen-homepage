// Project Constants§
export const SITE_CONFIG = {
  name: "Henri Maronen",
  title: "Henri Maronen - Portfolio",
  description: "Personal portfolio and homepage",
  url: "https://henrimaronen.com", // Update with your actual domain
} as const;

// Navigation
export const NAVIGATION_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// Re-export colors for easy access
export * from "./colors";

// Re-export links for easy access
export * from "./links";

// Export all constants
export * from "./typography";
