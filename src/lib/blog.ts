import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPostMeta {
  slug: string;
  date: string;
  titleTR: string;
  titleEN: string;
  excerptTR: string;
  excerptEN: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  contentTR: string;
  contentEN: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function isFile(file: string) {
  return fs.statSync(path.join(BLOG_DIR, file)).isFile();
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") && isFile(file))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    date: String(data.date ?? ""),
    titleTR: String(data.titleTR ?? slug),
    titleEN: String(data.titleEN ?? slug),
    excerptTR: String(data.excerptTR ?? ""),
    excerptEN: String(data.excerptEN ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    contentTR: content.trim(),
    contentEN: String(data.contentEN ?? content).trim(),
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
