import { CTAButton } from "@/components/primitives/CTAButton";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";
import type { HeroStagedProps } from "@/lib/types";

export function HeroStaged({
  eyebrow,
  stat,
  headline,
  headlineMuted,
  sub,
  primaryCta,
  secondaryCta,
  illustration,
}: HeroStagedProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24 md:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
        {stat ? (
          <p className="text-body-sm text-ink">
            {stat.label} <span className="text-ink-light">{stat.value}</span>
          </p>
        ) : null}
        <h1 className="mt-6 text-display-lg text-ink md:text-display-xl">
          {headline}
          {headlineMuted ? (
            <span className="text-ink-light"> {headlineMuted}</span>
          ) : null}
        </h1>
        <p className="mt-6 max-w-prose text-body-lg text-ink-muted">{sub}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CTAButton
            variant="primary"
            href={primaryCta.href}
            label={primaryCta.label}
          />
          {secondaryCta ? (
            <CTAButton
              variant="secondary"
              href={secondaryCta.href}
              label={secondaryCta.label}
            />
          ) : null}
        </div>
      </Reveal>
      <Reveal className="mt-16 md:mt-20" delay={120}>
        {illustration}
      </Reveal>
    </section>
  );
}
