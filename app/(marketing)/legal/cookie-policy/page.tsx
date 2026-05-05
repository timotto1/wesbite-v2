import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie policy — Stairpay",
  description: "How Stairpay uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <article className="mx-auto w-full max-w-prose px-section py-24">
      <p className="text-eyebrow uppercase text-ink-muted">Legal</p>
      <h1 className="mt-4 text-display-lg text-ink">Cookie policy</h1>
      <p className="mt-8 text-body-lg text-ink-muted">
        [Body copy placeholder — replace with the full cookie policy.]
      </p>
    </article>
  );
}
