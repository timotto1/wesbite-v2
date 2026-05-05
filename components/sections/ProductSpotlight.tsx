import { Reveal } from "@/components/animation/Reveal";
import type { ProductSpotlightProps } from "@/lib/types";

export function ProductSpotlight({
  headline,
  headlineMuted,
  body,
  illustration,
  layout,
  panelTone = "paper",
}: ProductSpotlightProps) {
  const panelClass =
    panelTone === "soft-purple" ? "bg-stairpay-soft" : "bg-paper-panel";

  if (layout === "image-below") {
    return (
      <section className="mx-auto w-full max-w-page px-section py-24">
        <Reveal className="mx-auto max-w-prose text-center">
          <h2 className="text-heading-xl text-ink">
            {headline}
            {headlineMuted ? (
              <span className="text-ink-light"> {headlineMuted}</span>
            ) : null}
          </h2>
          <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
        </Reveal>
        <Reveal delay={120} className={`mt-16 rounded-card ${panelClass} p-12`}>
          {illustration}
        </Reveal>
      </section>
    );
  }

  const reverse = layout === "image-left";

  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <div
        className={`grid grid-cols-12 items-center gap-8 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        <Reveal className="col-span-12 md:col-span-5 [direction:ltr]">
          <h2 className="text-heading-xl text-ink">
            {headline}
            {headlineMuted ? (
              <span className="text-ink-light"> {headlineMuted}</span>
            ) : null}
          </h2>
          <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7 [direction:ltr]" delay={120}>
          <div className={`rounded-card ${panelClass} p-6 md:p-10`}>
            {illustration}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
