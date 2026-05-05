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
    <section
      className="bg-white"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-section py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="flex flex-col items-start text-left">
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
          <p className="mt-6 text-body-lg text-ink-muted">{sub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
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
        <Reveal delay={120}>
          {illustration ?? (
            <div
              aria-hidden
              className="aspect-[4/3] w-full rounded-card bg-paper-panel"
            />
          )}
        </Reveal>
      </div>
      </div>
    </section>
  );
}
