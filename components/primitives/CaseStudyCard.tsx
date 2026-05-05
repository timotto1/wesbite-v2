import Link from "next/link";

type CaseStudyCardProps = {
  haName: string;
  headlineResult: string;
  body: string;
  quote: { text: string; author: string; role: string };
  href: string;
};

export function CaseStudyCard({
  haName,
  headlineResult,
  body,
  quote,
  href,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border-hairline border-rule bg-paper-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-stairpay"
    >
      {/* hover gradient ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-stairpay-soft opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
      />
      <p className="relative text-eyebrow uppercase text-ink-muted">{haName}</p>
      <p className="relative mt-4 text-heading-lg font-light text-stairpay">
        {headlineResult}
      </p>
      <p className="relative mt-4 text-body-md text-ink-muted">{body}</p>
      <blockquote className="relative mt-8 border-t border-hairline border-rule pt-6">
        <p className="text-body-md text-ink">&ldquo;{quote.text}&rdquo;</p>
        <footer className="mt-3 text-body-sm text-ink-muted">
          <span className="font-medium text-ink">{quote.author}</span>
          <span> · {quote.role}</span>
        </footer>
      </blockquote>
    </Link>
  );
}
