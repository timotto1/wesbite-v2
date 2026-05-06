import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  category: string;
  date: string;
  author: string;
  dek?: string;
  excerpt: string;
  image?: string;
  pinned?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts = files.map(readPostFile);
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const filename of candidates) {
    const full = path.join(BLOG_DIR, filename);
    if (fs.existsSync(full)) return readPostFile(filename);
  }
  return null;
}

export function getRelatedPost(currentSlug: string): Post | null {
  const all = getAllPosts();
  if (all.length <= 1) return null;
  const idx = all.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return all[0] ?? null;
  // Prefer the next post chronologically; wrap to first if at end.
  return all[(idx + 1) % all.length] ?? null;
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
