import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 16 16",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  CaseMgmt: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
      <path d="M5.5 6.5h5M5.5 9h3" />
    </svg>
  ),
  Reporting: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 13V8M6.5 13V5M10 13V9.5M13.5 13V6.5" />
    </svg>
  ),
  Insights: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 2.5l1.6 3.4 3.6.5-2.6 2.5.6 3.6L8 10.7l-3.2 1.8.6-3.6-2.6-2.5 3.6-.5L8 2.5z" />
    </svg>
  ),
  Listings: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 13V7l5-3.5L13 7v6" />
      <path d="M6.5 13V9.5h3V13" />
    </svg>
  ),
  Enquiries: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="6" cy="6" r="2.4" />
      <path d="M2 13c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
      <circle cx="11.5" cy="5" r="1.6" />
      <path d="M9.5 13c0-1.6 1.2-2.5 3-2.5s2.5 1 2.5 2.5" />
    </svg>
  ),
  Units: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="10" height="10" rx="1.5" />
      <path d="M3 8h10M8 3v10" />
    </svg>
  ),
  Devs: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="2.5" y="6" width="4" height="7" />
      <rect x="6.5" y="3" width="4" height="10" />
      <rect x="10.5" y="8" width="3" height="5" />
    </svg>
  ),
  Compliance: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M8 2.5l4.5 2v3.5c0 2.5-1.8 4.7-4.5 5.5C5.3 12.7 3.5 10.5 3.5 8V4.5L8 2.5z" />
      <path d="M6 8l1.5 1.5L10 7" />
    </svg>
  ),
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
