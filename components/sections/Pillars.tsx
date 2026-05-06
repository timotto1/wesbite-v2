import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";

type Pillar = {
  title: string;
  body: string;
  linkLabel?: string;
  href?: string;
};

type PillarsProps = {
  headline: string;
  items: Pillar[];
};

const ICONS = [HouseIcon, ChipIcon, LinkIcon];

export function Pillars({ headline, items }: PillarsProps) {
  return (
    <section className="mx-auto w-full max-w-page px-8 py-12 md:px-20 md:py-16 lg:px-28">
      <div>
        <Reveal>
          <h2 className="text-heading-xl !font-medium text-ink md:text-display-lg">
            {headline}
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((p, i) => {
            const Icon = ICONS[i] ?? ICONS[0];
            const href = p.href ?? "#";
            return (
              <Reveal key={p.title} delay={120 + i * 160}>
                <Link
                  href={href}
                  className="flex h-full flex-col rounded-[28px] bg-white p-10 transition-transform duration-700 ease-out has-[.pillar-cta:hover]:scale-[1.015]"
                >
                  <Icon />
                  <p className="mt-6 text-heading-lg font-medium tracking-tight text-ink">
                    {p.title}
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.6] tracking-tight text-ink">
                    {p.body}
                  </p>
                  {p.linkLabel ? (
                    <span
                      className="pillar-cta group mt-6 inline-flex w-fit items-center gap-0.5 text-body-sm"
                      style={{ color: "hsl(264, 60%, 70%)" }}
                    >
                      <span className="underline-offset-4 group-hover:underline">
                        {p.linkLabel}
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
                  ) : null}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HouseIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink"
      aria-hidden
    >
      <path d="M6 18L20 6l14 12" />
      <path d="M9 16v16h22V16" />
      <path d="M17 32V22h6v10" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink"
      aria-hidden
    >
      <rect x="10" y="10" width="20" height="20" rx="3" />
      <rect x="15" y="15" width="10" height="10" rx="1" />
      <path d="M16 10V6M24 10V6M16 34v-4M24 34v-4M10 16H6M10 24H6M34 16h-4M34 24h-4" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink"
      aria-hidden
    >
      <circle cx="11" cy="20" r="4" />
      <circle cx="29" cy="20" r="4" />
      <path d="M15 20h10" />
      <path d="M11 16V8M11 32v-8M29 16V8M29 32v-8" />
    </svg>
  );
}
