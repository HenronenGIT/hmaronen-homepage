export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
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
  description: string;
  skills: string[];
}

export interface ConnectLink {
  label: string;
  href: string;
  note: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/henrimaronen/" },
  { label: "GitHub", href: "https://github.com/HenronenGIT" },
  { label: "Instagram", href: "https://www.instagram.com/hmaronen/" },
];

export const heroHighlights = [
  "Creative engineer",
  "Full-stack product builder",
  "From idea to production",
] as const;

export const aboutParagraphs = [
  "I'm a passionate builder who recently worked on Slush's Product Team, where I developed and maintained digital products that enabled seamless operations for one of the world's largest startup events.",
  "As a Hive Helsinki alumnus, I made the jump into software development and haven't looked back. I'm captivated by the potential of technology to solve meaningful problems.",
  "Beyond code, I'm drawn to entrepreneurship and leadership. I find it fascinating to understand what drives great teams and, in result, great products.",
  "When I'm not coding, you'll find me framing landscapes, chasing furry balls on the padel court, sharpening my mind with non-fiction, or carving down the snowy slopes of Northern Finland.",
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
    description: "Interfaces that feel considered, fast, and production-ready.",
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
    description: "Systems and APIs that support real product usage at scale.",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Google Cloud",
      "Python",
      "Go",
      "Vercel",
    ],
  },
  {
    title: "Tools",
    description:
      "Workflow, design, and AI-assisted tools that speed up delivery.",
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
    period: "2025 - Present",
    title: "Senior Full-stack Developer",
    company: "Slush",
    description: [
      "Build and maintain scalable full-stack applications serving Slush's 13,000+ attendees.",
      "Led App Search to Elasticsearch microservice migration with client-side updates and optimized synchronization, mapping definitions, versioning, and zero-downtime capabilities.",
      "Developed Meeting Tool search experience which conducted 20,000 accepted meetings, featuring saved search functionality, CSV and JSON export capabilities, and stateful UI components.",
      "Provided technical support resolving user issues, created Metabase analytics dashboards, and onboarded new team members.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express",
      "CSS",
      "Google Cloud Platform",
      "Zod",
      "Elasticsearch",
    ],
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
