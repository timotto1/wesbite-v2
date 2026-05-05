import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";

type Category = { name: string; logos: string[] };

type IntegrationsGridProps = {
  eyebrow?: string;
  headline: string;
  body: string;
  categories: Category[];
};

export function IntegrationsGrid({
  eyebrow,
  headline,
  body,
  categories,
}: IntegrationsGridProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal className="mx-auto max-w-prose">
        {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
        <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
          {headline}
        </h2>
        <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
      </Reveal>
      <Reveal delay={140} className="mt-16 overflow-hidden rounded-card border-hairline border-rule bg-paper-card">
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className={`grid grid-cols-1 gap-6 p-8 md:grid-cols-[240px_1fr] md:items-center md:gap-12 ${
              i > 0 ? "border-t border-hairline border-rule" : ""
            }`}
          >
            <p className="text-body-md font-medium text-ink">{cat.name}</p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {cat.logos.map((logo) => (
                <span
                  key={logo}
                  className="text-body-md text-ink-light grayscale transition-colors duration-300 hover:text-ink"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
