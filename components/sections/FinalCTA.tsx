import { CTAButton } from "@/components/primitives/CTAButton";
import { Reveal } from "@/components/animation/Reveal";

type FinalCTAProps = {
  headline: string;
  sub: string;
  primaryCta: { label: string; href: string };
};

export function FinalCTA({ headline, sub, primaryCta }: FinalCTAProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-32">
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-card border-hairline border-rule bg-paper-card p-12 text-center md:p-20">
          {/* Subtle radial accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-stairpay-soft opacity-60 blur-3xl"
          />
          <div className="relative">
            <h3 className="text-heading-xl !font-medium text-ink md:text-display-lg">
              {headline}
            </h3>
            <p className="mx-auto mt-6 max-w-prose text-body-lg text-ink-muted">
              {sub}
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton
                variant="primary"
                href={primaryCta.href}
                label={primaryCta.label}
                arrow
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
