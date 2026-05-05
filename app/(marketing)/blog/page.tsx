import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Field notes from Shared Ownership — Stairpay",
  description:
    "Notes on Shared Ownership, Housing Associations, and the systems behind them.",
};

export default function BlogIndex() {
  const posts = getAllPosts().slice(0, 12);

  return (
    <>
      <section className="mx-auto w-full max-w-page px-section py-24 md:py-32">
        <p className="text-eyebrow uppercase text-ink-muted">Blog</p>
        <h1 className="mt-4 text-display-lg text-ink md:text-display-xl">
          Field notes from{" "}
          <span className="text-ink-light">Shared Ownership.</span>
        </h1>
      </section>

      <section className="mx-auto w-full max-w-page px-section pb-24">
        {posts.length === 0 ? (
          <p className="text-body-lg text-ink-muted">No posts yet.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border-hairline border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="bg-paper-card">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-paper-panel"
                >
                  <p className="text-eyebrow uppercase text-ink-muted">
                    {post.frontmatter.category} ·{" "}
                    {formatPostDate(post.frontmatter.date)}
                  </p>
                  <p className="mt-4 text-heading-md text-ink">
                    {post.frontmatter.title}
                  </p>
                  <p className="mt-3 text-body-md text-ink-muted">
                    {post.frontmatter.excerpt}
                  </p>
                  <span className="mt-auto pt-8 text-body-sm text-stairpay opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
