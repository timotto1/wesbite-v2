import Link from "next/link";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";
import type { FeatureStackProps } from "@/lib/types";

export function FeatureStack({
  eyebrow,
  headline,
  headlineMuted,
  features,
  illustration,
}: FeatureStackProps) {
  const hasIllustration = Boolean(illustration);

  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <div className={`grid grid-cols-12 gap-12 ${hasIllustration ? "items-start" : ""}`}>
        <div className={`col-span-12 ${hasIllustration ? "md:col-span-6" : "md:col-span-8"}`}>
          <Reveal>
            {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
            <h2 className="mt-4 max-w-prose text-heading-xl text-ink">
              {headline}
              {headlineMuted ? (
                <span className="text-ink-light"> {headlineMuted}</span>
              ) : null}
            </h2>
          </Reveal>
          <div className="mt-12 max-w-prose space-y-9">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-body-lg">
                  <strong className="font-medium text-ink">
                    {f.leadPhrase}
                  </strong>{" "}
                  <span className="text-ink-muted">
                    {f.body}
                    {f.inlineLink ? (
                      <>
                        {" "}
                        <Link
                          href={f.inlineLink.href}
                          className="text-stairpay underline decoration-stairpay/30 underline-offset-4 transition-colors hover:decoration-stairpay"
                        >
                          {f.inlineLink.text}
                        </Link>
                      </>
                    ) : null}
                  </span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        {hasIllustration ? (
          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            {illustration}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
