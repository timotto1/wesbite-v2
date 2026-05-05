import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { productSlugs } from "@/content/products";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/company", "/blog", "/together-for-homes", "/demo"];

  const products = productSlugs.map((slug) => ({
    url: `${siteUrl}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...products,
    ...posts,
  ];
}
