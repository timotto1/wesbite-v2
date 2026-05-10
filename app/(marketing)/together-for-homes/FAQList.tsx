"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

interface FAQListProps {
  items: FAQItem[];
}

export function FAQList({ items }: FAQListProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-rule overflow-hidden rounded-card border-hairline border-rule bg-paper-card">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left transition-colors hover:bg-paper-panel"
            >
              <span className="text-heading-sm font-medium text-ink">
                {item.question}
              </span>
              <span
                aria-hidden
                className="shrink-0 text-ink-muted transition-transform duration-300"
                style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="px-8 pb-6 text-body-md text-ink-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
