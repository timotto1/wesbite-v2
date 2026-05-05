import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility statement — Stairpay",
  description: "Stairpay's commitment to WCAG 2.2 AA accessibility.",
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto w-full max-w-prose px-section py-24">
      <p className="text-eyebrow uppercase text-ink-muted">Legal</p>
      <h1 className="mt-4 text-display-lg text-ink">Accessibility statement</h1>
      <p className="mt-8 text-body-lg text-ink-muted">
        [Body copy placeholder — replace with the full accessibility statement.]
      </p>
    </article>
  );
}
