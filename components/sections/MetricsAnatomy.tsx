import type { ReactNode } from "react";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { MetricPanel } from "@/components/primitives/MetricPanel";
import { Reveal } from "@/components/animation/Reveal";
import type { Metric } from "@/lib/types";

type MetricsAnatomyProps = {
  eyebrow?: string;
  headline: string;
  body?: string;
  metrics: [Metric, Metric, Metric, Metric];
  diagram: ReactNode;
};

export function MetricsAnatomy({
  eyebrow,
  headline,
  body,
  metrics,
  diagram,
}: MetricsAnatomyProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal className="mx-auto max-w-prose text-center">
        {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
        <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
          {headline}
        </h2>
        {body ? (
          <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
        ) : null}
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5" delay={80}>
          <MetricPanel metrics={metrics} />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={160}>
          {diagram}
        </Reveal>
      </div>
    </section>
  );
}
