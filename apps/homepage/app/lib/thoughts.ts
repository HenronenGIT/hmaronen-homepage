import fs from "fs";
import { marked } from "marked";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";

export interface ThoughtMeta {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  tags: string[];
  excerpt: string;
}

export interface Thought extends ThoughtMeta {
  htmlContent: string;
}

const THOUGHTS_DIR = path.join(process.cwd(), "content/thoughts");

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripMarkdown(text: string): string {
  return text
    .replace(/[#*`_()\]>]/g, "")
    .replace(/\[/g, "")
    .trim();
}

function makeExcerpt(content: string): string {
  const stripped = stripMarkdown(content);
  return stripped.length > 180 ? stripped.substring(0, 180) + "…" : stripped;
}

export function getAllThoughts(): ThoughtMeta[] {
  const files = fs.readdirSync(THOUGHTS_DIR).filter((f) => f.endsWith(".md"));

  const thoughts = files.map((filename): ThoughtMeta => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(THOUGHTS_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      formattedDate: formatDate(data.date as string),
      tags: (data.tags as string[]) ?? [],
      excerpt: makeExcerpt(content),
    };
  });

  return thoughts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getThought(slug: string): Thought {
  const filepath = path.join(THOUGHTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);

  const htmlContent = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    formattedDate: formatDate(data.date as string),
    tags: (data.tags as string[]) ?? [],
    excerpt: stripMarkdown(content).substring(0, 180) + "…",
    htmlContent,
  };
}

export function getThoughtSlugs(): { slug: string }[] {
  const files = fs.readdirSync(THOUGHTS_DIR).filter((f) => f.endsWith(".md"));
  return files.map((f) => ({ slug: f.replace(/\.md$/, "") }));
}
