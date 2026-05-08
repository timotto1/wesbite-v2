import { CTAButton } from "@/components/primitives/CTAButton";
import { Reveal } from "@/components/animation/Reveal";

type FinalCTAProps = {
  headline: string;
  sub?: string;
  primaryCta: { label: string; href: string };
};

export function FinalCTA({ headline, sub, primaryCta }: FinalCTAProps) {
  return (
    <section
      className="relative w-screen mb-[-8rem]"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        backgroundImage: "url('/images/cta-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(255, 255, 255, 0.15)" }}
      />
      <div className="relative mx-auto w-full max-w-page px-section pt-48 pb-48">
        <Reveal>
          <div className="mx-auto text-center">
            <h3 className="whitespace-nowrap !font-medium leading-[1.08] tracking-[-0.02em] text-ink text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px]">
              {headline}
            </h3>
            {sub ? (
              <p className="mx-auto mt-6 max-w-prose text-body-lg text-ink-muted">
                {sub}
              </p>
            ) : null}
            <div className="mt-10 flex justify-center">
              <CTAButton
                variant="primary"
                href={primaryCta.href}
                label={primaryCta.label}
                arrow
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
