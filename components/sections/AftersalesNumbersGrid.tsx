import { Reveal } from "@/components/animation/Reveal";

type Stat = {
  eyebrow: string;
  number: string;
  unit: string;
  caption?: string;
  chart?: boolean;
};

const STATS: Stat[] = [
  {
    eyebrow: "Time to ROI",
    number: "2",
    unit: "months",
    caption: "to break even on the platform",
  },
  {
    eyebrow: "Avg. staircasing uplift",
    number: "50",
    unit: "%",
    caption: "more cases completed per year",
    chart: true,
  },
  {
    eyebrow: "Time saved per case",
    number: "4",
    unit: "hours",
    caption: "of HA team work, automated away",
  },
  {
    eyebrow: "Structured datapoints per resident",
    number: "50",
    unit: "+",
    caption: "captured and queryable",
  },
];

export function AftersalesNumbersGrid() {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <div
        className="rounded-[28px] px-6 py-16 md:px-12 md:py-20"
        style={{ backgroundColor: "#F1F2F4" }}
      >
        <Reveal className="mx-auto max-w-prose text-center">
          <h2 className="text-heading-xl text-ink md:text-display-lg">
            The numbers behind aftersales.
          </h2>
          <p className="mt-6 text-body-lg text-ink-muted">
            What Stairpay delivers from day one.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={80 + i * 80}>
              <StatCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ eyebrow, number, unit, caption, chart }: Stat) {
  const symbolUnit = /^[+%]/.test(unit);
  return (
    <div className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[16px] bg-white px-4 text-center md:px-5">
      {chart ? <BackgroundUpchart /> : null}
      <div className="relative flex flex-col items-center text-center">
      <p className="text-[12px] font-normal text-ink-muted">{eyebrow}</p>
      <p
        className={`mt-4 flex items-baseline justify-center whitespace-nowrap font-medium tracking-[-0.02em] text-ink ${
          symbolUnit ? "" : "gap-1.5"
        }`}
        style={{ lineHeight: 0.95 }}
      >
        <span className="text-[36px] md:text-[48px]">{number}</span>
        <span className="text-[24px] md:text-[32px]">{unit}</span>
      </p>
      {caption ? (
        <p className="mt-4 max-w-[24ch] text-[12px] text-ink-muted">
          {caption}
        </p>
      ) : null}
      </div>
    </div>
  );
}

function BackgroundUpchart() {
  const linePath =
    "M0 34 C 8 30 14 34 22 30 C 30 26 36 32 44 26 C 52 20 60 24 68 16 C 74 10 80 12 86 8";
  const areaPath = `${linePath} L 86 40 L 0 40 Z`;
  return (
    <>
      <svg
        aria-hidden
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] w-full"
      >
        <defs>
          <linearGradient id="staircase-uplift-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#staircase-uplift-grad)" />
        <path
          d={linePath}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* End-of-line marker — positioned over the path's endpoint (86, 8)
          inside a chart band that occupies the bottom 28% of the card. */}
      <span
        aria-hidden
        className="pointer-events-none absolute h-2 w-2 rounded-full"
        style={{
          left: "86%",
          bottom: "22.4%",
          transform: "translate(-50%, 50%)",
          backgroundColor: "#7C3AED",
        }}
      />
    </>
  );
}
