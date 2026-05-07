"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animation/Reveal";

type ProblemStatementProps = {
  headline?: string;
  body: string;
};

export function ProblemStatement({ headline, body }: ProblemStatementProps) {
  const splitIdx = body.lastIndexOf(". ");
  const prefix = splitIdx === -1 ? "" : body.slice(0, splitIdx + 2);
  const lastSentence = splitIdx === -1 ? body : body.slice(splitIdx + 2);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const distance = rect.height - vh;
      if (distance <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      let p = -rect.top / distance;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const revealCount = Math.floor(progress * lastSentence.length);

  return (
    <section
      className="bg-white"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div
        ref={wrapperRef}
        className="relative"
        style={{ height: "180vh" }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto w-full max-w-page px-section">
            <Reveal className="max-w-3xl md:ml-[8%]">
              {headline ? (
                <h3 className="text-display-xl !font-semibold tracking-tight text-ink md:text-[64px] md:leading-[1.05]">
                  {headline}
                </h3>
              ) : null}
              <p
                className={`${headline ? "mt-8" : ""} max-w-prose text-body-lg font-medium text-ink-light`}
              >
                {prefix}
                {lastSentence.split("").map((ch, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < revealCount ? "var(--ink)" : "var(--ink-light)",
                      transition: "color 200ms ease-out",
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
