export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github" | "instagram" | "mail";
}

export interface InfoCardItem {
  label: string;
  value: string;
  detail?: string;
  href?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  category: string;
  description: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tags: string[];
  image?: string;
  eyebrow: string;
}

export interface SkillGroup {
  title: string;
  // description: string;
  skills: string[];
}

export interface ConnectLink {
  label: string;
  href: string;
  note: string;
}

export interface ArchiveLink {
  label: string;
  href: string;
  note: string;
}

export const contactEmail = "henrimaronen@gmail.com";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/henrimaronen/",
  },
  {
    label: "GitHub",
    icon: "github",
    href: "https://github.com/HenronenGIT",
  },
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/hmaronen/",
  },
  {
    label: "Connect",
    icon: "mail",
    href: "#connect",
  },
];

export const archiveLink: ArchiveLink = {
  label: "Visit the archive",
  href: "https://v1.henrimaronen.com",
  note: "The previous version of this homepage still lives on as a snapshot.",
};

export const aboutParagraphs = [
  "I build digital products end-to-end, from database schemas to user interfaces, with a focus on scalability and long-term ownership. The goal isn’t just to ship, but to create something that others can pick up, extend, and take further.",
  "Right now, I’m exploring how artificial intelligence can be applied in product development. I’m studying different concepts and experimenting with ways to turn them into real features that create actual user value, not just hype.",
  "Before writing a single line of code, I focus on whether something is worth building in the first place. I look for early signals that a problem is real and that the solution has potential. Once that’s clear, I move into execution with attention to detail, structured thinking, and a strong emphasis on keeping both the product and the team members around in a good state.",
  "Over the past four years, I’ve worked across the full stack, building products from the ground up. What drives me is the combination of continuous learning and the ability to create something tangible, something that didn’t exist before and can have real impact.",
  "Outside of work, I spend time in the gym, framing landscapes through viewfinder, or learning through books and podcasts. That constant loop of building and learning is what keeps me moving forward.",
] as const;

export const infoCards: InfoCardItem[] = [
  {
    label: "Current role",
    value: "Senior Full-stack Developer",
    detail: "Product Team, Slush",
  },
  {
    label: "Education",
    value: "Hive Helsinki",
    href: "https://www.hive.fi/",
  },
  {
    label: "Focus",
    value: "Web development",
    detail: "Interfaces, systems, and product delivery",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Zod",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Google Cloud",
      "Python",
      "Go",
      "MongoDB",
      "Vercel",
    ],
  },
  {
    title: "Tools",

    skills: [
      "Figma",
      "Git",
      "AI Dev Tools",
      "Cursor",
      "Claude",
      "Postman",
      "ESLint",
      "Prettier",
      "DataGrip",
      "Notion",
      "Perplexity",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2026 - Present",
    title: "Career Development",
    company: "Personal",
    description: [
      "After a few years of working in the industry, I've realized that I need to take a step back and focus on myself.",
    ],
    technologies: ["RAG", "AI Development", "Hackathons", "Event organization"],
  },
  {
    period: "2024",
    title: "Full-stack Developer",
    company: "Slush",
    description: [
      "Built internal tools that improved workflows for the Slush team.",
      "Project owner of Slush Online, a year-round platform helping founders share insights and connect with investors.",
      "Project owner of Media Bank, enabling media attendees to access press releases and media kits with ease.",
      "Contributed to the Activities Tool, supporting the creation of 500+ side events via a dynamic submission form I was responsible for.",
      "Developed a feature-flag system with cache-optimized flag fetching and admin tooling for progressive rollouts.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Google Cloud Platform",
      "Zod",
      "AI Agent",
    ],
  },
  {
    period: "2023",
    title: "Junior Full-stack Developer",
    company: "Slush",
    description: [
      "Developed and maintained internal tools that streamlined operations for the Slush team.",
      "Implemented new features for the Talent Tool, supporting the recruitment of over 1,000 volunteers.",
      "Co-developed the Media Bank, providing an organized tool for press materials and resources.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Google Cloud Platform",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Breefli",
    category: "Web app",
    eyebrow: "Side project",
    description:
      "A personal news aggregator that pulls information from different sources and creates a daily briefing for you.",
    href: "https://app.breefli.app",
    secondaryHref: "https://github.com/HenronenGIT/breefli",
    secondaryLabel: "GitHub",
    tags: ["React", "Node.js", "RSS", "Next.js"],
  },
  {
    name: "Photography Portfolio",
    category: "Photography",
    eyebrow: "Image-led build",
    description:
      "A full-stack photography portfolio with a custom GCS and Cloudflare image delivery pipeline, WebP thumbnail generation, and a stand-alone Go backend.",
    href: "https://photos.henrimaronen.com/",
    tags: [
      "Go",
      "Cloudflare",
      "GCS",
      "GCP",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/images/photo-portfolio-image.jpg",
  },
];

export const connectLinks: ConnectLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/henrimaronen/",
    note: "For professional conversations and opportunities.",
  },
  {
    label: "Telegram",
    href: "https://t.me/hmaronen",
    note: "For quick, direct messages when speed matters.",
  },
  {
    label: "GitHub",
    href: "https://github.com/HenronenGIT",
    note: "For code, side projects, and technical context.",
  },
];
