import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPost,
} from "@/lib/blog";
import { mdxComponents } from "@/components/blog/MdxComponents";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Stairpay`,
    description: post.frontmatter.dek ?? post.frontmatter.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPost(post.slug);

  return (
    <>
      <article className="mx-auto w-full max-w-prose px-section py-24">
        <p className="text-eyebrow uppercase text-ink-muted">
          {post.frontmatter.category} · {formatPostDate(post.frontmatter.date)}
        </p>
        <h1 className="mt-4 text-display-lg text-ink">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.dek ? (
          <p className="mt-4 text-body-lg text-ink-muted">
            {post.frontmatter.dek}
          </p>
        ) : null}
        <p className="mt-8 text-body-sm text-ink-light">
          By {post.frontmatter.author}
        </p>
        <div className="mt-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      {related ? (
        <section className="mx-auto w-full max-w-prose px-section pb-12">
          <div className="rounded-card border-hairline border-rule bg-paper-card p-8">
            <p className="text-eyebrow uppercase text-ink-muted">Read next</p>
            <Link
              href={`/blog/${related.slug}`}
              className="group mt-4 block"
            >
              <p className="text-heading-md text-ink group-hover:text-stairpay">
                {related.frontmatter.title}
              </p>
              <p className="mt-2 text-body-md text-ink-muted">
                {related.frontmatter.excerpt}
              </p>
            </Link>
          </div>
        </section>
      ) : null}

      <FinalCTA
        headline="Ready to run Shared Ownership properly?"
        sub="30-minute demo. We'll show you the platform with your own workflows in mind."
        primaryCta={{ label: "Request demo", href: "/demo" }}
      />
    </>
  );
}
