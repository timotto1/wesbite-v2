"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  className?: string;
  /** ms to delay the reveal after intersection */
  delay?: number;
  /** Reveal once and keep visible (default true). */
  once?: boolean;
  /** Tweak the intersection rootMargin — default reveals slightly before fully in view. */
  rootMargin?: string;
  children: React.ReactNode;
};

/**
 * Wraps children in a div with an intersection-driven fade + rise reveal.
 * Respects prefers-reduced-motion via the .reveal class in globals.css.
 */
export function Reveal({
  className = "",
  delay = 0,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  children,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return (
    <div
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
