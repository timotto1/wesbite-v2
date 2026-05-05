"use client";

import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/lib/types";

type MetricPanelProps = {
  metrics: [Metric, Metric, Metric, Metric];
};

export function MetricPanel({ metrics }: MetricPanelProps) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border-hairline border-rule bg-rule">
      {metrics.map((m, i) => (
        <MetricCell key={`${m.label}-${i}`} metric={m} index={i} />
      ))}
    </div>
  );
}

function MetricCell({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-paper-card p-8">
      <p className="text-eyebrow uppercase text-ink-muted">{metric.label}</p>
      <p
        className="mt-3 text-display-lg font-light text-ink"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${
            index * 90
          }ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${index * 90}ms`,
        }}
      >
        <AnimatedNumber value={metric.value} active={shown} delay={index * 90} />
      </p>
    </div>
  );
}

function AnimatedNumber({
  value,
  active,
  delay,
}: {
  value: string;
  active: boolean;
  delay: number;
}) {
  // Parse a leading number out of the string (e.g. "92%", "12,400", "6", "[verify]").
  // Anything we can't parse is rendered as-is.
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numeric = match ? Number(match[1].replace(/,/g, "")) : NaN;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState<string>(() =>
    Number.isFinite(numeric) ? "0" : value
  );

  useEffect(() => {
    if (!active) return;
    if (!Number.isFinite(numeric)) {
      setDisplay(value);
      return;
    }
    const start = performance.now() + delay;
    const duration = 1200;
    let raf = 0;

    const step = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      const integerPart = numeric % 1 === 0 ? Math.round(current) : current.toFixed(1);
      const formatted =
        numeric % 1 === 0
          ? Number(integerPart).toLocaleString("en-GB")
          : (current as number).toFixed(1);
      setDisplay(formatted);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, numeric, value, delay]);

  if (!Number.isFinite(numeric)) {
    return <>{value}</>;
  }
  return (
    <>
      {display}
      {suffix}
    </>
  );
}
