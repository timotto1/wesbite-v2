import { CTAButton } from "@/components/primitives/CTAButton";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";
import { CountUp } from "@/components/animation/CountUp";
import type { HeroStagedProps } from "@/lib/types";

export function HeroLanding({
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
      <div className="mx-auto w-full max-w-page px-section pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow ? (
            <Reveal>
              <EyebrowLabel>{eyebrow}</EyebrowLabel>
            </Reveal>
          ) : null}
          {stat ? (
            <Reveal>
              <p className="text-body-sm text-ink">
                <span className="relative inline-block tabular-nums">
                  <span aria-hidden className="invisible">
                    {stat.value}
                  </span>
                  <CountUp
                    value={stat.value}
                    from={1}
                    duration={1800}
                    className="absolute inset-0 text-left"
                  />
                </span>{" "}
                <span className="text-ink-light">{stat.label}</span>
              </p>
            </Reveal>
          ) : null}
          <Reveal delay={500} duration={3000} className="mt-6">
            <h1 className="text-display-lg text-ink md:text-display-xl">
              {headline}
              {headlineMuted ? (
                <span className="text-ink-light"> {headlineMuted}</span>
              ) : null}
            </h1>
          </Reveal>
          <Reveal delay={250} className="mt-6">
            <p className="text-body-lg text-ink-muted">{sub}</p>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Reveal delay={750}>
              <CTAButton
                variant="primary"
                href={primaryCta.href}
                label={primaryCta.label}
              />
            </Reveal>
            {secondaryCta ? (
              <Reveal delay={900}>
                <CTAButton
                  variant="secondary"
                  href={secondaryCta.href}
                  label={secondaryCta.label}
                />
              </Reveal>
            ) : null}
          </div>
        </div>
        <Reveal delay={1100} className="mt-16 md:mt-20">
          {illustration ?? (
            <div
              aria-hidden
              className="aspect-[16/9] w-full rounded-card bg-paper-panel"
            />
          )}
        </Reveal>
      </div>
    </section>
  );
}
