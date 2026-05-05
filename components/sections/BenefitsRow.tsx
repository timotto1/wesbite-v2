import { Reveal } from "@/components/animation/Reveal";
import type { Outcome } from "@/lib/types";

type BenefitsRowProps = {
  benefits: Outcome[];
};

export function BenefitsRow({ benefits }: BenefitsRowProps) {
  const cols = benefits.length;
  const colClass =
    cols === 3
      ? "lg:grid-cols-3"
      : cols === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-4";

  return (
    <section className="mx-auto w-full max-w-page px-section py-16">
      <div className={`grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 ${colClass}`}>
        {benefits.map((b, i) => (
          <Reveal key={b.heading} delay={i * 80}>
            <div className="flex flex-col gap-3">
              <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#AE78F1]/25 text-[#AE78F1]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 11 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 5.5 4.5 8l4.5-5" />
                </svg>
              </span>
              <div>
                <h3 className="text-heading-sm font-medium text-ink">
                  {b.heading}
                </h3>
                {b.body ? (
                  <p className="mt-2 text-body-sm text-ink-muted">{b.body}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
