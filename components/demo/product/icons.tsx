import type { CSSProperties, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { active?: boolean };

const base = {
  viewBox: "0 0 16 16",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const navBase = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const NAV_TXN = "transform 220ms cubic-bezier(.2,.7,.3,1)";
const navOverflow: CSSProperties = { overflow: "visible" };

export const Icon = {
  CaseMgmt: ({ active, style, ...p }: IconProps) => (
    <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.5" />
      <line
        x1="8"
        y1="10.5"
        x2="16"
        y2="10.5"
        style={{
          transform: active ? "translateY(0.6px)" : "translateY(0)",
          transition: NAV_TXN,
        }}
      />
      <line
        x1="8"
        y1="14"
        x2="14"
        y2="14"
        style={{
          transformOrigin: "8px 14px",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          opacity: active ? 1 : 0,
          transition:
            "transform 220ms cubic-bezier(.2,.7,.3,1), opacity 160ms ease",
        }}
      />
    </svg>
  ),
  Reporting: ({ active, style, ...p }: IconProps) => {
    const bars = [
      { x: 6, y1: 14, y2: 19, delay: 0 },
      { x: 9.5, y1: 9, y2: 19, delay: 40 },
      { x: 14.5, y1: 11, y2: 19, delay: 80 },
      { x: 18, y1: 7, y2: 19, delay: 120 },
    ];
    return (
      <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
        {bars.map((b, i) => (
          <g
            key={i}
            style={{
              transform: active ? "translateY(-1.1px)" : "translateY(0)",
              transition: `transform 240ms cubic-bezier(.2,.7,.3,1) ${b.delay}ms`,
            }}
          >
            <line x1={b.x} y1={b.y1 + 1.4} x2={b.x} y2={b.y2} />
            <circle cx={b.x} cy={b.y1} r="1.1" />
          </g>
        ))}
        <line x1="4" y1="20.25" x2="20" y2="20.25" />
      </svg>
    );
  },
  Insights: ({ active, style, ...p }: IconProps) => (
    <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
      <g
        style={{
          transformOrigin: "12px 12px",
          transform: active
            ? "rotate(-6deg) scale(1.04)"
            : "rotate(0) scale(1)",
          transition: NAV_TXN,
        }}
      >
        <path d="M12 3.5 L14.472 8.508 L20 9.31 L16 13.207 L16.944 18.713 L12 16.115 L7.056 18.713 L8 13.207 L4 9.31 L9.528 8.508 Z" />
      </g>
    </svg>
  ),
  Listings: ({ active, style, ...p }: IconProps) => (
    <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
      <g
        style={{
          transformOrigin: "12px 20px",
          transform: active ? "translateY(-1.4px)" : "translateY(0)",
          transition: NAV_TXN,
        }}
      >
        <path d="M4 11 L12 4.5 L20 11 L20 19 A1 1 0 0 1 19 20 L5 20 A1 1 0 0 1 4 19 Z" />
      </g>
    </svg>
  ),
  Enquiries: ({ active, style, ...p }: IconProps) => (
    <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
      <g
        style={{
          transform: active ? "translateX(-1.2px)" : "translateX(0)",
          transition: NAV_TXN,
        }}
      >
        <circle cx="16" cy="8.5" r="2.4" />
        <path d="M11.5 18.5 C12 15.5 14 14 16 14 C18 14 20 15.5 20.5 18.5" />
      </g>
      <g
        style={{
          transform: active ? "translateX(0.6px)" : "translateX(0)",
          transition: NAV_TXN,
        }}
      >
        <circle cx="9" cy="9" r="3" />
        <path d="M3.5 19 C4 15.5 6.2 13.5 9 13.5 C11.8 13.5 14 15.5 14.5 19" />
      </g>
    </svg>
  ),
  Units: ({ active, style, ...p }: IconProps) => {
    const d = active ? 0.9 : 0;
    return (
      <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
        <rect
          x="4"
          y="4"
          width="7"
          height="7"
          rx="1.4"
          style={{
            transform: `translate(${-d}px, ${-d}px)`,
            transition: NAV_TXN,
          }}
        />
        <rect
          x="13"
          y="4"
          width="7"
          height="7"
          rx="1.4"
          style={{
            transform: `translate(${d}px, ${-d}px)`,
            transition: NAV_TXN,
          }}
        />
        <rect
          x="4"
          y="13"
          width="7"
          height="7"
          rx="1.4"
          style={{
            transform: `translate(${-d}px, ${d}px)`,
            transition: NAV_TXN,
          }}
        />
        <rect
          x="13"
          y="13"
          width="7"
          height="7"
          rx="1.4"
          style={{
            transform: `translate(${d}px, ${d}px)`,
            transition: NAV_TXN,
          }}
        />
      </svg>
    );
  },
  Devs: ({ active, style, ...p }: IconProps) => {
    const bars = [
      { x: 5, y: 13, w: 3.6, h: 7, s: 1.2, delay: 0 },
      { x: 10.2, y: 9, w: 3.6, h: 11, s: 1.13, delay: 60 },
      { x: 15.4, y: 5, w: 3.6, h: 15, s: 1.09, delay: 120 },
    ];
    return (
      <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
        {bars.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="0.6"
            style={{
              transformOrigin: `${b.x + b.w / 2}px 20px`,
              transform: active ? `scaleY(${b.s})` : "scaleY(1)",
              transition: `transform 260ms cubic-bezier(.2,.7,.3,1) ${b.delay}ms`,
            }}
          />
        ))}
      </svg>
    );
  },
  Compliance: ({ active, style, ...p }: IconProps) => {
    const TICK_LEN = 9;
    return (
      <svg {...navBase} {...p} style={{ ...navOverflow, ...style }}>
        <path d="M12 3.5 L19.5 5.8 L19.5 12.2 C19.5 16.4 16.4 19.4 12 21 C7.6 19.4 4.5 16.4 4.5 12.2 L4.5 5.8 Z" />
        <polyline
          points="9,12 11.2,14 15,10.5"
          pathLength={TICK_LEN}
          style={{
            strokeDasharray: TICK_LEN,
            strokeDashoffset: active ? 0 : TICK_LEN,
            transition: "stroke-dashoffset 320ms cubic-bezier(.4,.7,.3,1)",
          }}
        />
      </svg>
    );
  },
  Plus: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 3.5v9M3.5 8h9" />
    </svg>
  ),
  Help: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="8" r="5.5" />
      <path d="M6.5 6.3c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .9-1.5 1.2-1.5 2.2" />
      <path d="M8 11.2v.1" />
    </svg>
  ),
  Collapse: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9.5 5l-3 3 3 3" />
    </svg>
  ),
  Search: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="7" cy="7" r="4.2" />
      <path d="M10.2 10.2l3 3" />
    </svg>
  ),
  Caret: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 6l3 3 3-3" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="4" width="11" height="8" rx="1.5" />
      <path d="M3 5l5 4 5-4" />
    </svg>
  ),
  Phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 4.5c0 4.5 4 8.5 8.5 8.5l1.5-2-3-1.5-1 1c-1.5-.5-2.5-1.5-3-3l1-1L5.5 3 3.5 4.5z" />
    </svg>
  ),
  Filter: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M2.5 4h11l-4 5v4l-3-1.5V9l-4-5z" />
    </svg>
  ),
  Columns: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
      <path d="M6.3 3v10M9.7 3v10" />
    </svg>
  ),
  Download: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 2.5v8M5 7.5l3 3 3-3M3 13.5h10" />
    </svg>
  ),
  Sort: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 3.5v9M3 5.5l2-2 2 2M11 12.5v-9M9 10.5l2 2 2-2" />
    </svg>
  ),
  Expand: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 3H3v3M10 3h3v3M6 13H3v-3M10 13h3v-3" />
    </svg>
  ),
  Cal: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
      <path d="M2.5 6.5h11M5.5 2.5v2M10.5 2.5v2" />
    </svg>
  ),
  Home: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M2.5 8L8 3l5.5 5v5h-11V8z" />
    </svg>
  ),
  Warn: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 2l6 11H2L8 2z" />
      <path d="M8 7v3M8 11.5v.1" />
    </svg>
  ),
  Pound: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M10.5 4.5C10 3.5 9 3 8 3c-1.5 0-2.5 1-2.5 2.5V8h4M4.5 8h6M5 13h6c-.5-1-.5-2 0-3" />
    </svg>
  ),
  PiggyBank: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 9c0-2.5 2-4.5 5-4.5 .5 0 1 0 1.5.2L11 3.5l.5 2c1 .8 1.5 2 1.5 3.5 0 1-.3 1.8-.8 2.5v1.5h-2v-1H6v1H4v-1.5C3.4 10.8 3 9.9 3 9z" />
    </svg>
  ),
  Upload: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 12V4M5 7l3-3 3 3M3 13.5h10" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3.5 8.5l2.5 2.5 6.5-6.5" />
    </svg>
  ),
};

export type IconKey = keyof typeof Icon;
