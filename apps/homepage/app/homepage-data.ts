export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "github";
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
  // { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Connect", href: "#connect" },
  { label: "Thoughts", href: "/thoughts" },
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
];

export const archiveLink: ArchiveLink = {
  label: "Visit the archive",
  href: "https://v1.henrimaronen.com",
  note: "The previous version of this homepage still lives on as a snapshot.",
};

export const aboutParagraphs = [
  "I work across the full stack because good products require it. Design decisions made in the database ripple up to the interface — I’d rather understand both ends than hand off blindly.",
  "I’m currently deep in AI applied to product work — reading, building small experiments, and asking which AI capabilities are actually ready to ship into real products.",
  "I default to asking questions before building. Is the problem real? Does this solution have legs? When those answers are yes, I move fast — structured thinking, high attention to detail, and a genuine investment in the outcome.",
  "I’ve spent four years building from the ground up across the full stack. The part I can’t let go of is making something real — an idea that becomes a product someone actually uses.",
  "Away from the screen I’m lifting weights, shooting landscapes, or working through whatever book I convinced myself I needed. The discipline of one tends to bleed into the others.",
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
    detail: "Full-stack, product-minded.",
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
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Express",
      "Redis",
      "Elasticsearch",
      "Zod",
      "Docker",
      "Google Cloud",
      "Python",
      "MongoDB",
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      "Claude",
      "Cursor",
      "V0",
      "Vercel",
      "Figma",
      "Git",
      "DataGrip",
      "Notion",
      "Postman",
      "Storybook",
    ],
  },
  {
    title: "Practices",
    skills: [
      "REST",
      "CI/CD",
      "Automated Testing",
      "Pub/Sub",
      "Microservices",
      "Monorepo",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2026 - Present",
    title: "Career Development",
    company: "Personal",
    description: [
      "Ownership mode. Choosing my own learning agenda: AI tooling, side projects, and the fundamentals I want to go deeper on.",
    ],
    technologies: [
      "RAG",
      "AI Development",
      "Hackathons",
      "Event organization",
      "Data Science",
      "Software Literature",
    ],
  },
  {
    period: "2025",
    title: "Full-stack Developer",
    company: "Slush",
    description: [
      "Build and maintain scalable full-stack applications serving Slush's 13,000+ attendees.",
      "Led App Search to Elasticsearch microservice migration with client-side updates and optimized synchronization, mapping definitions, versioning, and zero-downtime capabilities.",
      "Developed Meeting Tool search experience which conducted 20,000 accepted meetings, featuring saved search functionality, CSV/JSON export capabilities, and stateful UI components.",
      "Provided technical support resolving user issues, created Metabase analytics dashboards, and onboarded new team members.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Styled Components",
      "Google Cloud Platform",
      "Zod",
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
  {
    period: "2021 - 2023",
    title: "Student",
    company: "Hive Helsinki",
    description: [
      "Sister school of École 42. Rigorous CS curriculum via peer-reviewed projects and self-directed learning.",
    ],
    technologies: [
      "C",
      "Web",
      "PHP",
      "HTML",
      "CSS",
      "Unix",
      "Algorithms",
      "Git",
      "Peer Learning",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Breefli",
    category: "Web app",
    eyebrow: "Side project",
    description:
      "Your daily briefing, built to your sources. Breefli cuts the noise and delivers the feeds you actually care about — one read, every morning.",
    href: "https://app.breefli.app/feed",
    secondaryHref: "https://github.com/HenronenGIT/breefli",
    secondaryLabel: "GitHub",
    tags: ["React", "Node.js", "RSS", "Next.js", "AI"],
  },
  {
    name: "Photography Portfolio",
    category: "Photography",
    eyebrow: "Image-led build",
    description:
      "A photography portfolio built for real-world image scale — custom delivery pipeline via GCS and Cloudflare, WebP thumbnails, and a standalone Go backend keeping it fast.",
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
    note: "If you want to skip the form.",
  },
];
