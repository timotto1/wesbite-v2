import { CaseStudyCard } from "@/components/primitives/CaseStudyCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";

type Item = {
  haName: string;
  headlineResult: string;
  body: string;
  quote: { text: string; author: string; role: string };
  href: string;
};

type CaseStudiesGridProps = {
  eyebrow?: string;
  headline: string;
  items: Item[];
};

export function CaseStudiesGrid({ eyebrow, headline, items }: CaseStudiesGridProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal className="mx-auto max-w-prose">
        {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
        <h3 className="mt-4 text-heading-xl !font-medium text-ink md:text-display-lg">
          {headline}
        </h3>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.haName} delay={160 + i * 200}>
            <CaseStudyCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
