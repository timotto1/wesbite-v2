import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Slavery statement — Stairpay",
  description: "Stairpay's modern slavery and human trafficking statement.",
};

export default function ModernSlaveryPage() {
  return (
    <article className="mx-auto w-full max-w-prose px-section py-24">
      <p className="text-eyebrow uppercase text-ink-muted">Legal</p>
      <h1 className="mt-4 text-display-lg text-ink">Modern Slavery statement</h1>
      <p className="mt-8 text-body-lg text-ink-muted">
        [Body copy placeholder — replace with the full modern slavery
        statement.]
      </p>
    </article>
  );
}
