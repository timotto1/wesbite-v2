import Link from "next/link";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";

type Category = { name: string; logos: string[] };

type IntegrationsGridProps = {
  eyebrow?: string;
  headline: string;
  body: string;
  categories?: Category[];
};

export function IntegrationsGrid({
  eyebrow,
  headline,
  body,
}: IntegrationsGridProps) {
  return (
    <section className="mx-auto w-full max-w-page px-8 py-12 md:px-20 md:py-16 lg:px-28">
      <Reveal>
        <Link
          href="/blog/plays-well-with-your-stack"
          className="group relative flex w-full flex-col overflow-hidden rounded-card bg-paper-card p-32 text-left transition-transform duration-700 ease-out has-[.integrations-cta:hover]:scale-[1.015] md:flex-row md:items-stretch"
        >
          <div className="flex flex-1 flex-col justify-center md:max-w-xl md:pr-10">
            {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
            <h3 className="mt-4 text-heading-xl !font-medium text-ink md:text-display-lg">
              {headline}
            </h3>
            <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
            <span
              className="integrations-cta group/cta mt-6 inline-flex w-fit items-center gap-0.5 text-body-sm"
              style={{ color: "hsl(264, 60%, 70%)" }}
            >
              <span className="underline-offset-4 group-hover/cta:underline">
                Learn more about our integrations policy
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 3l4 4-4 4" />
              </svg>
            </span>
          </div>

          <div
            aria-hidden
            className="mt-8 aspect-[4/3] w-full overflow-hidden rounded-card border border-dashed border-rule bg-paper-panel/60 md:mt-0 md:aspect-auto md:w-1/2 md:flex-none"
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-eyebrow uppercase tracking-wider text-ink-light">
                Integrations preview
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
