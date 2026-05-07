"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";

export function AreaChart({
  data,
  height = 180,
  color = "#5b3fd6",
  months,
}: {
  data: number[];
  height?: number;
  color?: string;
  months?: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(600);
  const [hover, setHover] = useState<number | null>(null);
  const id = useId().replace(/:/g, "");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    setW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const pad = { l: 8, r: 8, t: 12, b: 28 };
  const innerW = Math.max(10, w - pad.l - pad.r);
  const innerH = height - pad.t - pad.b;
  const max = Math.max(...data) * 1.15;
  const min = Math.min(...data) * 0.6;
  const xs = data.map((_, i) => pad.l + (innerW * i) / (data.length - 1));
  const ys = data.map((v) => pad.t + innerH - ((v - min) / (max - min)) * innerH);

  const path = xs
    .map((x, i) => {
      if (i === 0) return `M ${x} ${ys[i]}`;
      const px = xs[i - 1];
      const py = ys[i - 1];
      const cx1 = px + (x - px) / 2;
      const cy1 = py;
      const cx2 = px + (x - px) / 2;
      const cy2 = ys[i];
      return `C ${cx1} ${cy1} ${cx2} ${cy2} ${x} ${ys[i]}`;
    })
    .join(" ");
  const area = `${path} L ${xs[xs.length - 1]} ${pad.t + innerH} L ${xs[0]} ${pad.t + innerH} Z`;

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <line x1={pad.l} y1={pad.t + innerH} x2={pad.l + innerW} y2={pad.t + innerH} stroke="#ece9f3" strokeWidth="1" />
        <path d={area} fill={`url(#grad-${id})`} />
        <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {hover != null && (
          <>
            <line x1={xs[hover]} y1={pad.t} x2={xs[hover]} y2={pad.t + innerH} stroke={color} strokeOpacity="0.3" strokeDasharray="3,3" />
            <circle cx={xs[hover]} cy={ys[hover]} r="5" fill="white" stroke={color} strokeWidth="2" />
          </>
        )}
        {months?.map((m, i) => (
          <text key={i} x={xs[i]} y={height - 8} fontSize="10" fill="#a8a2bc" textAnchor="middle">
            {m}
          </text>
        ))}
        {data.map((_, i) => (
          <rect
            key={i}
            x={xs[i] - innerW / (2 * (data.length - 1))}
            y={pad.t}
            width={innerW / (data.length - 1)}
            height={innerH}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          />
        ))}
      </svg>
    </div>
  );
}

type DonutDatum = { value: number; color: string };

export function DonutChart({
  data,
  size = 140,
  thickness = 18,
  centerLabel,
}: {
  data: DonutDatum[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - thickness / 2;
  const cx = size / 2;
  const cy = size / 2;
  let acc = -Math.PI / 2;
  const arcs = data.map((d) => {
    const ang = (d.value / total) * Math.PI * 2;
    const a0 = acc;
    const a1 = acc + ang;
    acc = a1;
    const x0 = cx + r * Math.cos(a0);
    const y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const large = ang > Math.PI ? 1 : 0;
    return { ...d, path: `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}` };
  });
  return (
    <svg width={size} height={size} style={{ display: "block" }}>
      {arcs.map((a, i) => (
        <path key={i} d={a.path} stroke={a.color} strokeWidth={thickness} fill="none" strokeLinecap="butt" />
      ))}
      {centerLabel && (
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="20" fontWeight="700" fill="#1a1530">
          {centerLabel}
        </text>
      )}
    </svg>
  );
}

type Series = { name: string; color: string; values: (number | null)[] };

export function BarChart({
  groups,
  series,
  height = 220,
  max,
  yTicks = 5,
  groupColors,
  fillHeight,
}: {
  groups: string[];
  series: Series[];
  height?: number;
  max?: number;
  yTicks?: number;
  groupColors?: string[];
  fillHeight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(500);
  const [h, setH] = useState(height);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      setW(e.contentRect.width);
      if (fillHeight) setH(Math.max(80, e.contentRect.height));
    });
    ro.observe(el);
    const rect = el.getBoundingClientRect();
    setW(rect.width);
    if (fillHeight) setH(Math.max(80, rect.height));
    return () => ro.disconnect();
  }, [fillHeight]);

  const pad = { l: 28, r: 8, t: 8, b: 22 };
  const innerW = Math.max(10, w - pad.l - pad.r);
  const innerH = h - pad.t - pad.b;
  const allValues = series.flatMap((s) => s.values).filter((v): v is number => v != null);
  const yMax =
    max ||
    (() => {
      const peak = Math.max(...allValues, 1);
      if (peak <= 10) return Math.ceil(peak + 1);
      if (peak <= 50) return Math.ceil(peak / 5) * 5;
      return Math.ceil(peak / 100) * 100;
    })();

  const groupW = innerW / groups.length;
  const barAreaW = groupW * 0.75;
  const barW = barAreaW / Math.max(1, series.length);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", height: fillHeight ? "100%" : undefined }}>
      <svg width={w} height={h} style={{ display: "block" }}>
        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const y = pad.t + (innerH * i) / yTicks;
          const val = Math.round(yMax * (1 - i / yTicks));
          return (
            <g key={i}>
              <line x1={pad.l} y1={y} x2={pad.l + innerW} y2={y} stroke="#f0eef7" strokeWidth="1" />
              <text x={pad.l - 6} y={y + 3} fontSize="9" fill="#a8a2bc" textAnchor="end">
                {val}
              </text>
            </g>
          );
        })}
        {groups.map((g, gi) => {
          const gx = pad.l + gi * groupW + (groupW - barAreaW) / 2;
          return (
            <g key={gi}>
              {series.map((s, si) => {
                const v = s.values[gi];
                if (v == null) return null;
                const bh = (v / yMax) * innerH;
                const x = gx + si * barW;
                const y = pad.t + innerH - bh;
                return <rect key={si} className="pd-bar" x={x + 1} y={y} width={barW - 2} height={bh} fill={groupColors?.[gi] ?? s.color} rx="2" opacity="0.95" />;
              })}
              <text x={gx + barAreaW / 2} y={h - 6} fontSize="10" fill="#a8a2bc" textAnchor="middle">
                {g}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ScatterChart({
  points,
  height = 200,
  xMax = 1000,
  thresholds = [80],
}: {
  points: { x: number; atRisk?: boolean; y?: number }[];
  height?: number;
  xMax?: number;
  thresholds?: number[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(500);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    setW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const pad = { l: 28, r: 16, t: 16, b: 28 };
  const innerW = Math.max(10, w - pad.l - pad.r);
  const innerH = height - pad.t - pad.b;
  const ticks = [0, 250, 500, 750, 1000];

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        {ticks.map((t, i) => {
          const x = pad.l + (t / xMax) * innerW;
          return (
            <g key={i}>
              <line x1={x} y1={pad.t} x2={x} y2={pad.t + innerH} stroke="#f0eef7" strokeDasharray="3,3" />
              <text x={x} y={height - 8} fontSize="10" fill="#a8a2bc" textAnchor="middle">
                {t}y
              </text>
            </g>
          );
        })}
        {thresholds.map((t, i) => {
          const x = pad.l + (t / xMax) * innerW;
          return (
            <g key={i}>
              <line x1={x} y1={pad.t} x2={x} y2={pad.t + innerH} stroke="#e0436b" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x={x + 6} y={pad.t + 10} fontSize="10" fill="#e0436b" fontWeight="500">
                {t}-year threshold
              </text>
            </g>
          );
        })}
        {points.map((p, i) => {
          const x = pad.l + (p.x / xMax) * innerW;
          const y = pad.t + ((p.y ?? ((i * 37) % 100) / 100) * (innerH - 12)) + 6;
          return <circle key={i} cx={x} cy={y} r="4" fill={p.atRisk ? "#e0436b" : "#5b3fd6"} opacity="0.85" />;
        })}
      </svg>
    </div>
  );
}

export function Spark({ data, color = "#5b3fd6", height = 36 }: { data: number[]; color?: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(120);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    setW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const xs = data.map((_, i) => (w * i) / (data.length - 1));
  const ys = data.map((v) => height - 4 - ((v - min) / (max - min || 1)) * (height - 8));
  const path = xs.map((x, i) => `${i === 0 ? "M" : "L"} ${x} ${ys[i]}`).join(" ");
  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        <path d={path} fill="none" stroke={color} strokeWidth="1.5" />
        <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="white" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
}
