"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** The final value as displayed (e.g. "33%", "1.4M", "120"). The numeric prefix is animated; any non-numeric suffix is preserved. */
  value: string;
  /** Starting numeric value (default 1). */
  from?: number;
  /** Animation duration in ms (default 1800). */
  duration?: number;
  /** Delay before counting begins, in ms (default 0). */
  delay?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({
  value,
  from = 1,
  duration = 1800,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".")
    ? match[1].split(".")[1].length
    : 0;

  const [current, setCurrent] = useState(from);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setCurrent(target);
      return;
    }
    let raf: number | undefined;
    const startTimer = window.setTimeout(() => {
      const startTs = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTs;
        const t = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(t);
        setCurrent(from + (target - from) * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [started, from, target, duration, delay]);

  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
