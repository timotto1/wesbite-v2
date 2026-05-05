"use client";

import { useState } from "react";

/**
 * Composite illustration for the Finance card.
 *
 * Shows three at-a-glance KPIs the operator would see on the day they open
 * Stairpay finance: month forecast, variance vs. forecast, and receipts so
 * far this month visualised as paired pill bars (purple = received,
 * coral = outstanding). Hovering a bar reveals that month's combined
 * receipts total in the top-right of the chart card.
 */

/* 22 months of receipts. Underlying trend is seasonal (peaks in summer,
   troughs in winter), but month-to-month noise has been mixed in so the
   chart reads as real data rather than a clean wave. The trailing pair
   represents forecast months and renders dimmed. */
const RECEIPTS_BARS: Array<{ p: number; c: number; dim?: boolean }> = [
  { p: 18, c: 22 }, // Jan
  { p: 38, c: 12 }, // Feb
  { p: 26, c: 30 }, // Mar
  { p: 58, c: 16 }, // Apr
  { p: 44, c: 28 }, // May
  { p: 82, c: 14 }, // Jun
  { p: 60, c: 34 }, // Jul
  { p: 78, c: 18 }, // Aug
  { p: 38, c: 26 }, // Sep
  { p: 52, c: 14 }, // Oct
  { p: 22, c: 30 }, // Nov
  { p: 32, c: 12 }, // Dec
  { p: 30, c: 24 }, // Jan
  { p: 22, c: 14 }, // Feb
  { p: 56, c: 30 }, // Mar
  { p: 36, c: 16 }, // Apr
  { p: 76, c: 22 }, // May
  { p: 58, c: 32 }, // Jun
  { p: 88, c: 14 }, // Jul
  { p: 48, c: 28 }, // Aug
  { p: 62, c: 16, dim: true }, // Sep
  { p: 28, c: 24, dim: true }, // Oct
];

export function FinancePreview() {
  return (
    <div className="flex h-full w-full flex-col gap-1.5">
      <div className="grid grid-cols-2 gap-1.5">
        <StatCard
          label="Monthly forecast"
          value="£1,251,012"
          sub="21 units"
        />
        <StatCard
          label="Variance"
          value="−£21,425"
          valueClass="text-[#C9252D]"
          sub="Behind forecast"
        />
      </div>
      <ReceiptsCard />
    </div>
  );
}

function StatCard({
  label,
  value,
  valueClass,
  sub,
}: {
  label: string;
  value: string;
  valueClass?: string;
  sub: string;
}) {
  return (
    <div className="rounded-[14px] border border-[#ECE9F0] bg-white px-5 py-3 shadow-[0_1px_3px_rgba(38,4,93,0.08)]">
      <div className="text-[13px] font-normal text-[#6E6B7B]">{label}</div>
      <div
        className={`mt-2 text-[21px] font-medium leading-none tracking-tight ${
          valueClass ?? "text-[#26045D]"
        }`}
      >
        {value}
      </div>
      <div className="mt-2 text-[12px] text-[#8A85A0]">{sub}</div>
    </div>
  );
}

function ReceiptsCard() {
  const [hovered, setHovered] = useState<number | null>(null);
  const hoveredBar = hovered !== null ? RECEIPTS_BARS[hovered] : null;
  const hoveredValue = hoveredBar
    ? `£${((hoveredBar.p + hoveredBar.c) * 2500).toLocaleString("en-GB")}`
    : null;

  return (
    <div className="flex flex-1 flex-col rounded-[14px] border border-[#ECE9F0] bg-white px-5 py-3 shadow-[0_1px_3px_rgba(38,4,93,0.08)]">
      <div className="flex items-baseline justify-between">
        <div className="text-[13px] font-normal text-[#6E6B7B]">Monthly receipts</div>
        <div
          aria-live="polite"
          className={`text-[21px] font-medium leading-none tracking-tight text-[#26045D] transition-opacity duration-200 ${
            hoveredValue ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoveredValue ?? "—"}
        </div>
      </div>
      <div className="mt-6 flex flex-1 items-end justify-between">
        {RECEIPTS_BARS.map((b, i) => (
          <div
            key={i}
            className="flex h-full flex-1 cursor-default flex-col items-center justify-end gap-[1.5px]"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered((cur) => (cur === i ? null : cur))}
          >
            <div
              className={`w-[5px] rounded-full transition-opacity duration-150 ${
                b.dim ? "bg-[#C9B5F1]" : "bg-[#6B2BD6]"
              } ${hovered !== null && hovered !== i ? "opacity-50" : "opacity-100"}`}
              style={{ height: `${b.p}%` }}
            />
            <div
              className={`w-[5px] rounded-full transition-opacity duration-150 ${
                b.dim ? "bg-[#F4B5B7]" : "bg-[#E97A82]"
              } ${hovered !== null && hovered !== i ? "opacity-50" : "opacity-100"}`}
              style={{ height: `${b.c}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
