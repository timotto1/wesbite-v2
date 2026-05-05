import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";
import type { DiagramSectionProps } from "@/lib/types";

export function DiagramSection({
  eyebrow,
  headline,
  body,
  diagram,
  layout,
}: DiagramSectionProps) {
  if (layout === "diagram-below") {
    return (
      <section className="mx-auto w-full max-w-page px-section py-24">
        <Reveal className="mx-auto max-w-prose text-center">
          {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
          <h2 className="mt-4 text-heading-xl text-ink">{headline}</h2>
          {body ? (
            <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
          ) : null}
        </Reveal>
        <Reveal delay={140} className="mt-16">
          {diagram}
        </Reveal>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <div className="grid grid-cols-12 items-center gap-12">
        <Reveal className="col-span-12 md:col-span-5">
          {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
          <h2 className="mt-4 text-heading-xl text-ink">{headline}</h2>
          {body ? (
            <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
          ) : null}
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7" delay={140}>
          {diagram}
        </Reveal>
      </div>
    </section>
  );
}
