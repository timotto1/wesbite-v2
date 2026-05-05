import { Reveal } from "@/components/animation/Reveal";

type Point = { lead: string; body: string };

type Column = { title: string; points: Point[] };

type WhoWeServeProps = {
  headline: string;
  forHAs: Column;
  forResidents: Column;
};

function ColumnBlock({ column }: { column: Column }) {
  return (
    <div>
      <p className="text-eyebrow uppercase text-ink-muted">{column.title}</p>
      <div className="mt-8 space-y-8">
        {column.points.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className="text-body-lg">
              <strong className="font-medium text-ink">{p.lead}</strong>{" "}
              <span className="text-ink-muted">{p.body}</span>
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function WhoWeServe({ headline, forHAs, forResidents }: WhoWeServeProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <Reveal className="mx-auto max-w-prose">
        <h2 className="text-heading-xl text-ink md:text-display-lg">
          {headline}
        </h2>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <ColumnBlock column={forHAs} />
        <ColumnBlock column={forResidents} />
      </div>
    </section>
  );
}
