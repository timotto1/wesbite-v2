"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Composite illustration for the Compliance card.
 *
 * Two stacked cards each cycle through three lease-extracted facts.
 * Confidence drives the bar's colour — high scores read green, mid-band
 * scores shift through olive and amber, and lower scores trend red.
 * Whenever the row content changes the previous text crossfades out
 * while the new text crossfades in; the bar smoothly transitions its
 * width and colour at the same time.
 */

type Item = { label: string; value: string; percent: number };

const CYCLE_A: Item[] = [
  { label: "Landlord", value: "Stairpay Homes", percent: 99 },
  { label: "Term Length", value: "99-year lease", percent: 95 },
  { label: "Initial Market Value", value: "£450,000", percent: 87 },
];

const CYCLE_B: Item[] = [
  { label: "Rent Review Index", value: "CPI + 1%", percent: 78 },
  { label: "Rent Review Frequency", value: "Every 5 years", percent: 65 },
  { label: "Final Staircase Permitted", value: "100%", percent: 55 },
];

const FADE_MS = 1100;
const MIN_HOLD = 2400;
const MAX_HOLD = 5200;
const randomHold = () => MIN_HOLD + Math.random() * (MAX_HOLD - MIN_HOLD);

/** Maps a confidence score to an HSL colour, biased so mid-50s read amber-red. */
function colorForPercent(p: number): string {
  const t = Math.max(0, Math.min(1, p / 100));
  const eased = t * t;
  const hue = eased * 130;
  const sat = 60 - eased * 22;
  return `hsl(${hue}, ${sat}%, 50%)`;
}

type State = { current: number; previous: number | null };

function useCyclingIndex(length: number): State {
  const [state, setState] = useState<State>({ current: 0, previous: null });

  useEffect(() => {
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const cycle = () => {
      if (!alive) return;
      setState((s) => ({
        current: (s.current + 1) % length,
        previous: s.current,
      }));
      timers.push(
        setTimeout(() => {
          if (!alive) return;
          setState((s) => ({ ...s, previous: null }));
          timers.push(setTimeout(cycle, randomHold()));
        }, FADE_MS + 80),
      );
    };

    timers.push(setTimeout(cycle, randomHold()));
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, [length]);

  return state;
}

export function CompliancePreview() {
  const a = useCyclingIndex(CYCLE_A.length);
  const b = useCyclingIndex(CYCLE_B.length);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8">
      <ComplianceCard
        current={CYCLE_A[a.current]}
        previous={a.previous !== null ? CYCLE_A[a.previous] : null}
        swapKey={a.current}
      />
      <ComplianceCard
        current={CYCLE_B[b.current]}
        previous={b.previous !== null ? CYCLE_B[b.previous] : null}
        swapKey={b.current}
      />
    </div>
  );
}

function FadeSwap({
  swapKey,
  current,
  previous,
  className,
}: {
  swapKey: string | number;
  current: ReactNode;
  previous: ReactNode | null;
  className?: string;
}) {
  const isSwapping = previous != null;
  return (
    <div className={`relative ${className ?? ""}`}>
      {isSwapping && (
        <div
          key={`out-${swapKey}`}
          className="absolute inset-0 animate-compliance-fade-out"
        >
          {previous}
        </div>
      )}
      <div
        key={`in-${swapKey}`}
        className={isSwapping ? "animate-compliance-fade-in" : ""}
      >
        {current}
      </div>
    </div>
  );
}

function ComplianceCard({
  current,
  previous,
  swapKey,
}: {
  current: Item;
  previous: Item | null;
  swapKey: number;
}) {
  const isSwapping = previous != null;
  return (
    <div
      className={`origin-center rounded-[14px] border border-[#ECE9F0] bg-white px-5 py-3 shadow-[0_1px_3px_rgba(38,4,93,0.08)] ${
        isSwapping ? "animate-compliance-card-pulse" : ""
      }`}
    >
      <FadeSwap
        swapKey={`l-${swapKey}`}
        className="text-[13px] font-normal text-[#6E6B7B]"
        current={current.label}
        previous={previous?.label ?? null}
      />
      <FadeSwap
        swapKey={`v-${swapKey}`}
        className="mt-2 text-[21px] font-medium leading-tight tracking-tight text-[#26045D]"
        current={current.value}
        previous={previous?.value ?? null}
      />
      <div className="mt-1.5 h-[8px] w-full overflow-hidden rounded-full bg-[#ECECEC]">
        <div
          className="h-full rounded-full transition-[width,background-color] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `${current.percent}%`,
            backgroundColor: colorForPercent(current.percent),
          }}
        />
      </div>
      <FadeSwap
        swapKey={`p-${swapKey}`}
        className="mt-1.5 text-[12px] text-[#8A85A0]"
        current={`${current.percent}% confident`}
        previous={previous ? `${previous.percent}% confident` : null}
      />
    </div>
  );
}
