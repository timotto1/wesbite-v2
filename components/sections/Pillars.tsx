import { Reveal } from "@/components/animation/Reveal";

type Pillar = { title: string; body: string };

type PillarsProps = {
  headline: string;
  items: Pillar[];
};

export function Pillars({ headline, items }: PillarsProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal className="mx-auto max-w-prose">
        <h2 className="text-heading-xl text-ink md:text-display-lg">
          {headline}
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={80 + i * 80}>
            <div>
              <p className="text-heading-sm text-ink">{p.title}</p>
              <p className="mt-4 text-body-md text-ink-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
