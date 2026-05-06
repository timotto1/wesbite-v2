import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatPostDate, type Post } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resources — Stairpay",
  description:
    "Notes on Shared Ownership, Housing Associations, and the systems behind them.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.frontmatter.pinned) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <section className="mx-auto w-full max-w-page px-16 py-16 md:px-40 md:py-24 lg:px-56">
      <h1 className="text-heading-xl !font-medium tracking-tight text-ink md:text-display-lg">
        Latest
      </h1>

      {featured ? (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-10 block overflow-hidden rounded-[28px] bg-white transition-transform duration-700 ease-out hover:scale-[1.005]"
        >
          <div className="grid min-h-[420px] grid-cols-1 md:min-h-[480px] md:grid-cols-[1.4fr_1fr]">
            <ArticleImage post={featured} variant="featured" />
            <div className="flex flex-col justify-center gap-5 px-10 py-8">
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">
                  {featured.frontmatter.category}
                </p>
                <p className="mt-4 text-heading-lg font-semibold tracking-tight text-ink">
                  {featured.frontmatter.title}
                </p>
              </div>
              <p className="inline-flex items-center gap-2 text-body-sm text-ink-muted">
                <ClockIcon />
                {formatPostDate(featured.frontmatter.date)}
              </p>
            </div>
          </div>
        </Link>
      ) : null}

      {rest.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ArticleCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[28px] bg-white transition-transform duration-700 ease-out hover:scale-[1.005]"
    >
      <ArticleImage post={post} variant="card" />
      <div className="flex flex-col gap-5 px-10 py-8">
        <div>
          <p className="text-eyebrow uppercase text-ink-muted">
            {post.frontmatter.category}
          </p>
          <p className="mt-4 text-heading-lg font-semibold tracking-tight text-ink">
            {post.frontmatter.title}
          </p>
        </div>
        <p className="inline-flex items-center gap-2 text-body-sm text-ink-muted">
          <ClockIcon />
          {formatPostDate(post.frontmatter.date)}
        </p>
      </div>
    </Link>
  );
}

function ArticleImage({
  post,
  variant,
}: {
  post: Post;
  variant: "featured" | "card";
}) {
  const isFallback = !post.frontmatter.image;
  const aspect =
    variant === "featured"
      ? "aspect-[4/3] md:aspect-auto md:h-full"
      : "aspect-[16/10]";

  return (
    <div
      className={`relative w-full overflow-hidden ${isFallback ? "bg-white" : "bg-paper-panel"} ${aspect}`}
    >
      {isFallback ? (
        <LogoMark className="absolute left-1/2 top-1/2 h-1/2 w-auto -translate-x-1/2 -translate-y-1/2 select-none" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="#26045D"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M48 24 L48 47.5 A0.5 0.5 0 0 1 47.5 48 L0.5 48 A0.5 0.5 0 0 1 0 47.5 L0 32.5 A0.5 0.5 0 0 1 0.5 32 L15.5 32 A0.5 0.5 0 0 0 16 31.5 L16 16.5 A0.5 0.5 0 0 1 16.5 16 L31.5 16 A0.5 0.5 0 0 0 32 15.5 L32 0.5 A0.5 0.5 0 0 1 32.5 0 L47.5 0 A0.5 0.5 0 0 1 48 0.5 L48 24 Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
