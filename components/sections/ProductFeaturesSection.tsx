"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animation/Reveal";
import type { FeatureItem, RichFeature } from "@/lib/types";

type FeatureLike = FeatureItem | RichFeature;

type ProductFeaturesSectionProps = {
  features: FeatureLike[];
  /** Optional illustrations rendered in the sticky right column, indexed by feature. */
  illustrations?: ReactNode[];
};

const PLACEHOLDER_COLORS = [
  "bg-[#E5DAFB]",
  "bg-[#FFD9C4]",
  "bg-[#C7EBD3]",
  "bg-[#C7DAFB]",
  "bg-[#FAD4E5]",
  "bg-[#F2EAB6]",
];

function isRichFeature(f: FeatureLike): f is RichFeature {
  return "template" in f && "headline" in f;
}

function keyFor(f: FeatureLike) {
  return isRichFeature(f) ? f.headline : f.leadPhrase;
}

export function ProductFeaturesSection({ features, illustrations }: ProductFeaturesSectionProps) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b,
        );
        const idx = Number((best.target as HTMLElement).dataset.idx);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    const els = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-page px-section py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: feature content — scrolls normally. */}
        <div className="flex flex-col gap-24">
          {features.map((f, i) => (
            <div
              key={keyFor(f)}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-idx={i}
              className="flex min-h-[80vh] flex-col justify-center"
            >
              <Reveal>
                <FeatureContent feature={f} />
              </Reveal>
            </div>
          ))}
        </div>

        {/* Right: sticky illustration, cross-fades between features. */}
        <div className="hidden md:block">
          <div className="sticky top-24 h-[70vh]">
            <div className="relative flex h-full w-full items-center justify-center">
              {features.map((f, i) => {
                const illustration = illustrations?.[i];
                return (
                  <div
                    key={keyFor(f)}
                    aria-hidden
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {illustration ?? (
                      <div
                        className={`h-full w-full rounded-card ${PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length]}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureContent({ feature }: { feature: FeatureLike }) {
  if (!isRichFeature(feature)) {
    return (
      <>
        <h3 className="text-heading-md text-ink md:text-heading-lg">
          {feature.leadPhrase}
        </h3>
        <p className="mt-6 text-body-sm text-ink-muted">{feature.body}</p>
      </>
    );
  }

  return (
    <>
      <h3 className="text-heading-md text-ink md:text-heading-lg">
        {feature.headline}
      </h3>
      <p className="mt-6 text-body-sm text-ink-muted">{feature.intro}</p>
      {feature.template === "cards" ? (
        <CardsTemplate feature={feature} />
      ) : feature.template === "checklist" ? (
        <ChecklistTemplate feature={feature} />
      ) : (
        <WorkflowTemplate feature={feature} />
      )}
    </>
  );
}

function CardsTemplate({
  feature,
}: {
  feature: Extract<RichFeature, { template: "cards" }>;
}) {
  return (
    <>
      {feature.detail ? (
        <p className="mt-4 text-[13px] leading-relaxed text-ink-muted">
          {feature.detail}
        </p>
      ) : null}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {feature.cards.map((c) => (
          <div
            key={c.heading}
            className="rounded-card border border-rule bg-white p-5"
          >
            <h4 className="text-body-sm font-medium text-ink">{c.heading}</h4>
            <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">{c.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function ChecklistTemplate({
  feature,
}: {
  feature: Extract<RichFeature, { template: "checklist" }>;
}) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2">
      {feature.columns.map((col) => (
        <div key={col.heading}>
          <h4 className="text-body-sm font-medium text-ink">{col.heading}</h4>
          <ul className="mt-3 flex flex-col gap-2">
            {col.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted"
              >
                <span className="mt-[3px] flex h-3.5 w-3.5 flex-none items-center justify-center text-stairpay">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M2 5.5 4.5 8l4.5-5" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function WorkflowTemplate({
  feature,
}: {
  feature: Extract<RichFeature, { template: "workflow" }>;
}) {
  return (
    <ol className="mt-8 flex flex-col gap-5">
      {feature.steps.map((s, i) => (
        <li key={s.heading} className="flex gap-4">
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-stairpay text-[12px] font-medium text-paper">
            {i + 1}
          </span>
          <div>
            <h4 className="text-body-sm font-medium text-ink">{s.heading}</h4>
            <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
