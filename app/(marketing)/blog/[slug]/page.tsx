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
import { ShareRow } from "@/components/blog/ShareRow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Stairpay`,
    description: post.frontmatter.dek ?? post.frontmatter.excerpt,
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPost(post.slug);

  return (
    <>
      <div
        className="bg-white"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <article className="article mx-auto w-full max-w-[720px] px-section py-24">
          <header>
          <p className="text-eyebrow uppercase text-ink-muted">
            {post.frontmatter.category}
          </p>
          <p className="mt-2 text-eyebrow uppercase text-ink-muted">
            {formatPostDate(post.frontmatter.date)}
          </p>

          <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-tight text-ink md:text-[56px]">
            {post.frontmatter.title}
          </h1>

          {post.frontmatter.dek ? (
            <p className="mt-6 whitespace-pre-line text-heading-md !font-medium text-ink">
              {post.frontmatter.dek}
            </p>
          ) : null}

          <div className="mt-6">
            <ShareRow title={post.frontmatter.title} slug={post.slug} />
          </div>

          <hr className="mt-6 border-0 border-t border-rule" />
        </header>

        {post.frontmatter.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          (<img
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            className="mt-8 w-full rounded-[24px] object-cover"
          />)
        ) : null}

        <div className="mt-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

          <p className="mt-16 text-body-sm text-ink-muted">
            By {post.frontmatter.author}
          </p>
        </article>
      </div>
      {related ? (
        <section className="mx-auto w-full max-w-[720px] px-section pb-12">
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
        headline="The future of Shared Ownership"
        primaryCta={{ label: "Contact sales", href: "/demo" }}
      />
    </>
  );
}
