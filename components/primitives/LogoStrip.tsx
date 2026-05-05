"use client";

import { useEffect, useState } from "react";

type LogoStripProps = {
  intro?: string;
  logos: Array<{ name: string; src?: string }>;
};

const VISIBLE_CELLS = 6;
const PERIOD_MS = 2800;
const STAGGER_MS = 400;
const FADE_MS = 350;

type Phase = "stable" | "out" | "in";

function CycleCell({ items, startIdx, delayMs }: { items: string[]; startIdx: number; delayMs: number }) {
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

  return (
    <span
      className="text-body-md font-medium text-ink-muted"
      style={{
        ...styles,
        transition: phase === "in" ? "none" : `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms cubic-bezier(.4,0,.2,1), filter ${FADE_MS}ms ease`,
        display: "inline-block",
      }}
    >
      {items[idx]}
    </span>
  );
}

export function LogoStrip({ intro, logos }: LogoStripProps) {
  const names = logos.map((l) => l.name);

  return (
    <div className="mx-auto w-full max-w-content px-section py-16">
      {intro ? <p className="text-body-sm font-normal text-ink-light">{intro}:</p> : null}
      <div className="mt-6 grid grid-cols-2 divide-x divide-rule border border-rule sm:grid-cols-3 md:grid-cols-6">
        {Array.from({ length: VISIBLE_CELLS }, (_, i) => (
          <div key={i} className="flex h-24 items-center justify-center px-4">
            <CycleCell items={names} startIdx={i % names.length} delayMs={i * STAGGER_MS} />
          </div>
        ))}
      </div>
    </div>
  );
}
