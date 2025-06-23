// Project Constants§
export const SITE_CONFIG = {
  name: "Henri Maronen",  title: "Henri Maronen - Portfolio",
  description: "Personal portfolio and homepage",
  url: "https://henrimaronen.com", // Update with your actual domain
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/HenronenGIT",
  linkedin: "https://www.linkedin.com/in/henrimaronen/",
  medium: "https://medium.com/@henrimaronen",
} as const;


// Navigation
export const NAVIGATION_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
