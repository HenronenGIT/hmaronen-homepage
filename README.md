# Henri Maronen - Portfolio Website

<div align="center">

![Henri Maronen](src/assets/images/hmaronen.png)

**A modern, responsive portfolio website showcasing creative engineering excellence**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

[🌐 Live Demo](https://henrimaronen.com) • [💼 LinkedIn](https://linkedin.com/in/henrimaronen)

</div>

## 📖 About

This is Henri Maronen's personal portfolio website - a modern, minimalistic, and clean portfolio website. Built with modern web technologies.

## ✨ Features

- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop.
- **📊 Analytics Integration** - Vercel Analytics for performance monitoring.
- **🎨 Modern Design** - Modern, minimalistic, and clean design.
- **🚀 Fast Performance** - Built with Vite for lightning-fast development and production builds.
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML structure.

## 🛠️ Tech Stack

### Frontend

- **[React 18](https://reactjs.org/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components

- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons

### State Management & Routing

- **[React Router](https://reactrouter.com/)** - Declarative routing for React

### Development Tools

- **[pnpm](https://pnpm.io/)** - Fast package manager

## 🚀 Quick Start

### Prerequisites

- [pnpm](https://pnpm.io/) (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hmaronen/hmaronen-homepage.git
   cd hmaronen-homepage
   ```

2. **Install dependencies**

   Using pnpm:

   ```bash
   pnpm install
   ```

3. **Start the development server**

   Using pnpm:

   ```bash
   pnpm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` to see the website in action! 🎉

## 📜 Available Scripts

| Script      | Description                              |
| ----------- | ---------------------------------------- |
| `dev`       | Start development server with hot reload |
| `build`     | Build the project for production         |
| `preview`   | Preview the production build locally     |

## 📁 Project Structure

```
hmaronen-homepage/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   └── ...
│   ├── constants/         # Application constants
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── main.tsx          # Application entry point
├── package.json
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors & Theme

The design system is centralized in `src/constants/colors.ts`. You can easily customize the color palette:

```typescript
export const COLORS = {
  primary: "#4FD1C7",
  primaryHover: "#45B7B8",
  background: {
    main: "#0f0f23",
    // ... other colors
  },
};
```

### Content

Update the personal information, work experience, and skills in their respective component files:

- Hero content: `src/components/Hero.tsx`
- About section: `src/components/About.tsx`
- Work experience: `src/components/WorkExperience.tsx`
- Skills: `src/components/Skills.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

## 👨‍💻 Author

**Henri Maronen** - Creative Engineer
