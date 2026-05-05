"use client";

import { useEffect, useState } from "react";

/**
 * Slim 2px progress bar fixed to the very top of the viewport.
 * Tracks document scroll progress; respects prefers-reduced-motion
 * by simply hiding (no animation either way).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const compute = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const ratio = Math.max(0, Math.min(1, doc.scrollTop / scrollable));
      setProgress(ratio);
    };
    compute();
    const handler = () => compute();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-stairpay transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})`, width: "100%" }}
      />
    </div>
  );
}
