"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/animation/Reveal";

type Feature = { title: string; body: string };

type AudienceCard = {
  label: string;
  title: string;
  image: string;
  alt: string;
  tone: "dark" | "light";
  features: Feature[];
};

const CARDS: AudienceCard[] = [
  {
    label: "For Housing Associations",
    title: "Shared Ownership done better",
    image: "/images/audience/housing-associations.png",
    alt: "Modern Housing Association office building at dusk",
    tone: "dark",
    features: [
      {
        title: "Regulator-ready by default.",
        body: "One source of truth, audited end to end — the answers the regulator wants are already in the platform.",
      },
      {
        title: "Less time on admin, more time on residents.",
        body: "Automation handles the rote work, so your team handles the work that matters.",
      },
      {
        title: "Forecasts you can trust.",
        body: "Asset and resident data combined in one model — not stitched together from spreadsheets the night before a board meeting.",
      },
      {
        title: "Cases close faster.",
        body: "Data flows automatically between systems, so staircasing and resales move from instruction to completion in weeks, not months.",
      },
    ],
  },
  {
    label: "For residents",
    title: "Transparent. Simple. Personal.",
    image: "/images/audience/residents.png",
    alt: "Row of new-build shared ownership homes on a sunny day",
    tone: "light",
    features: [
      {
        title: "Clarity on costs and processes.",
        body: "Rent, service charges, share value, and what happens next — all in one place.",
      },
      {
        title: "Lease transparency.",
        body: "The terms of your lease, surfaced in plain English instead of buried in a 90-page PDF.",
      },
      {
        title: "Document storage.",
        body: "Lease, statements, valuations, correspondence — always to hand.",
      },
      {
        title: "Affordability tracking.",
        body: "Understand what you can afford to staircase, and when, without paying for advice you don't yet need.",
      },
    ],
  },
];

const GAP_PX = 24;
const EXPANDED_FRACTION = 0.75;

export function AudienceCards({ subtitle }: { subtitle?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [textMaxWidth, setTextMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const update = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktop) {
        setImageWidth(null);
        setTextMaxWidth(null);
        return;
      }
      const inner = node.offsetWidth - GAP_PX;
      setImageWidth(Math.round(inner * EXPANDED_FRACTION));
      setTextMaxWidth(Math.round(inner / 2 - 64));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const desktopCols =
    hovered === 0 ? "3fr 1fr" : hovered === 1 ? "1fr 3fr" : "1fr 1fr";

  return (
    <section className="mx-auto w-full max-w-page px-8 py-12 md:px-20 md:py-16 lg:px-28">
      <Reveal className="max-w-3xl">
        <h3 className="text-heading-xl !font-medium text-ink md:text-display-lg">
          The two sides of Stairpay
        </h3>
        {subtitle ? (
          <p className="mt-6 text-body-md text-ink-muted md:text-body-lg">
            {subtitle}
          </p>
        ) : null}
      </Reveal>
      <Reveal delay={250} className="mt-8 md:mt-12">
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] md:gap-6 md:[grid-template-columns:var(--audience-cols)]"
          style={{ "--audience-cols": desktopCols } as CSSProperties}
        >
          {CARDS.map((card, i) => {
            const isHovered = hovered === i;
            const isOtherHovered = hovered !== null && hovered !== i;
            const anchorLeft = i === 0;
            const fixedImage = imageWidth !== null;
            const imgStyle: CSSProperties | undefined = fixedImage
              ? {
                  width: imageWidth!,
                  maxWidth: "none",
                  height: "100%",
                  top: 0,
                  left: anchorLeft ? 0 : "auto",
                  right: anchorLeft ? "auto" : 0,
                }
              : undefined;

            return (
              <div
                key={card.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative aspect-[15/16] overflow-hidden rounded-3xl md:aspect-auto md:h-[520px]"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className={
                    fixedImage
                      ? "absolute object-cover"
                      : "absolute inset-0 h-full w-full object-cover"
                  }
                  style={imgStyle}
                />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out ${
                    isHovered ? "opacity-100" : "opacity-0"
                  } ${card.tone === "dark" ? "bg-black/75" : "bg-white/85"}`}
                />
                <div
                  className={`absolute left-8 right-8 top-8 ${
                    card.tone === "dark" ? "text-white" : "text-ink"
                  }`}
                  style={
                    imageWidth !== null
                      ? { width: imageWidth - 64 }
                      : undefined
                  }
                >
                  <div
                    className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOtherHovered
                        ? "translate-y-3 opacity-0 duration-300"
                        : "translate-y-0 opacity-100 duration-1000"
                    }`}
                    style={{
                      width: textMaxWidth !== null ? textMaxWidth : undefined,
                      transitionDelay: isOtherHovered ? "0ms" : "450ms",
                    }}
                  >
                    <p
                      className={`text-body-sm font-medium ${
                        card.tone === "dark" ? "text-white" : "text-ink"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3 className="mt-1 text-heading-xl !font-semibold !tracking-tight leading-tight md:text-display-lg">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="mt-12 grid grid-cols-2 gap-x-12 gap-y-7">
                    {card.features.map((feature, fi) => (
                      <li
                        key={feature.title}
                        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isHovered
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0"
                        }`}
                        style={{
                          transitionDelay: isHovered
                            ? `${700 + fi * 120}ms`
                            : "0ms",
                        }}
                      >
                        <h4 className="text-body-md font-medium leading-snug">
                          {feature.title}
                        </h4>
                        <p
                          className={`mt-1 text-body-sm leading-snug ${
                            card.tone === "dark"
                              ? "text-white/85"
                              : "text-ink"
                          }`}
                        >
                          {feature.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
