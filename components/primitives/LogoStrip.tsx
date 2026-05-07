"use client";

import { useEffect, useState } from "react";

type Logo = { name: string; src?: string };

type LogoStripProps = {
  intro?: string;
  introHighlight?: string;
  logos: Logo[];
};

const VISIBLE_CELLS = 10;
const PERIOD_MS = 20000;
const STAGGER_MS = 1500;
const FADE_MS = 1000;

type Phase = "stable" | "out" | "in";

function CycleCell({ items, startIdx, delayMs }: { items: Logo[]; startIdx: number; delayMs: number }) {
  const [idx, setIdx] = useState(startIdx);
  const [phase, setPhase] = useState<Phase>("stable");

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let outTimer: ReturnType<typeof setTimeout> | undefined;
    let raf1: number | undefined;
    let raf2: number | undefined;

    const startTimer = setTimeout(() => {
      const cycle = () => {
        setPhase("out");
        outTimer = setTimeout(() => {
          setIdx((i) => (i + VISIBLE_CELLS) % items.length);
          setPhase("in");
          raf1 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => setPhase("stable"));
          });
        }, FADE_MS);
      };
      cycle();
      intervalId = setInterval(cycle, PERIOD_MS);
    }, delayMs);

    return () => {
      clearTimeout(startTimer);
      if (outTimer) clearTimeout(outTimer);
      if (intervalId) clearInterval(intervalId);
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [items.length, delayMs]);

  const stylesByPhase: Record<Phase, { opacity: number; transform: string; filter: string }> = {
    stable: { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
    out: { opacity: 0, transform: "translateY(-10px)", filter: "blur(4px)" },
    in: { opacity: 0, transform: "translateY(10px)", filter: "blur(4px)" },
  };
  const styles = stylesByPhase[phase];
  const logo = items[idx];

  return (
    <span
      className="inline-flex items-center justify-center text-body-md font-medium text-ink-muted"
      style={{
        ...styles,
        transition: phase === "in" ? "none" : `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms cubic-bezier(.4,0,.2,1), filter ${FADE_MS}ms ease`,
      }}
    >
      {logo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-7 w-auto select-none object-contain"
        />
      ) : (
        logo.name
      )}
    </span>
  );
}

export function LogoStrip({ intro, introHighlight, logos }: LogoStripProps) {
  return (
    <div className="mx-auto w-full max-w-content px-section py-16">
      {intro ? (
        <p className="text-center text-body-md font-normal text-ink-light">
          {intro}
          {introHighlight ? (
            <>
              {" "}
              <span className="font-medium">{introHighlight}</span>
            </>
          ) : null}
          :
        </p>
      ) : null}
      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3 md:grid-cols-5">
        {Array.from({ length: VISIBLE_CELLS }, (_, i) => (
          <div key={i} className="flex h-24 items-center justify-center bg-paper px-4">
            <CycleCell items={logos} startIdx={i % logos.length} delayMs={i * STAGGER_MS} />
          </div>
        ))}
      </div>
    </div>
  );
}
