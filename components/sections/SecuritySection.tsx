import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Reveal } from "@/components/animation/Reveal";

type Point = { leadPhrase: string; body: string };

type SecuritySectionProps = {
  eyebrow: string;
  headline: string;
  body: string;
  points: Point[];
};

export function SecuritySection({ eyebrow, headline, body, points }: SecuritySectionProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal>
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2 className="mt-4 max-w-3xl text-heading-xl text-ink">{headline}</h2>
        <p className="mt-4 max-w-2xl text-body-lg text-ink-muted">{body}</p>
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <div className="security-card relative overflow-hidden rounded-card p-8 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {points.map((p) => (
              <div key={p.leadPhrase}>
                <p className="text-body-md font-medium text-ink">{p.leadPhrase}</p>
                <p className="mt-2 text-body-sm font-light text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
