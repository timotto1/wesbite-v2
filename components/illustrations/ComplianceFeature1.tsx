import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

// Surface — pure white, harder neutrals, sharper hairlines
const SURFACE = "#FFFFFF";
const BORDER = "#DCD9D2";
const DIVIDER = "#EBE8E0";
const TRACK = "#ECE9E1";
const HOVER_BG = "#F8F7F2";

// Type stack — darker neutrals, stronger contrast
const TEXT_INK = "#15131F";
const TEXT_BODY = "#363440";
const TEXT_MUTED = "#5C5A68";
const TEXT_FAINT = "#8B8995";

// Status palette
const GREEN = "#137A50";
const AMBER = "#9D6E12";
const RED = "#A6334A";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[25px]"
      style={{
        aspectRatio: `${FRAME_W} / ${FRAME_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/images/compliance/background-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={
          {
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            transform: `scale(calc(100cqi / ${FRAME_W}px))`,
            transformOrigin: "top left",
            position: "absolute",
            inset: 0,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

type Row = {
  label: string;
  sublabel: string;
  schemes: number | null;
  value: number;
  pct: number;
  color: string;
  live?: boolean;
  delta: { value: string; tone: "good" | "warn" | "bad"; arrow: "up" | "down" };
};

const TOTAL = 2972;

const ROWS: Row[] = [
  {
    label: "Clear",
    sublabel: "No action needed",
    schemes: null,
    value: 2712,
    pct: 91.3,
    color: GREEN,
    delta: { value: "0.8%", tone: "good", arrow: "up" },
  },
  {
    label: "Approaching threshold",
    sublabel: "Fix in next 6 months",
    schemes: 18,
    value: 213,
    pct: 7.2,
    color: AMBER,
    delta: { value: "12.4%", tone: "warn", arrow: "up" },
  },
  {
    label: "Active blocker",
    sublabel: "Would stop a sale today",
    schemes: 4,
    value: 47,
    pct: 1.6,
    color: RED,
    live: true,
    delta: { value: "6.5%", tone: "bad", arrow: "up" },
  },
];

function StatusDot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }}
    />
  );
}

function LiveDot() {
  return (
    <span
      style={{
        position: "relative",
        width: 7,
        height: 7,
        display: "inline-block",
        marginLeft: 7,
        verticalAlign: "middle",
        flexShrink: 0,
      }}
      aria-label="Live"
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: RED,
          opacity: 0.5,
          animation: "cf1-ping 2s ease-out infinite",
        }}
      />
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: RED,
        }}
      />
    </span>
  );
}

function Sparkline() {
  const W = 120;
  const H = 30;
  const padX = 1;
  const padY = 4;
  const data = [16, 14, 17, 13, 15, 12, 13, 11, 12, 10, 11, 9, 10, 8];
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const stepX = (W - padX * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = padX + i * stepX;
    const y = padY + ((max - v) / span) * (H - padY * 2);
    return [x, y] as const;
  });
  const linePath = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1][0].toFixed(2)} ${H} L ${points[0][0].toFixed(2)} ${H} Z`;
  const [endX, endY] = points[points.length - 1];

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      style={{ display: "block" }}
      aria-hidden
    >
      <defs>
        <linearGradient id="cf1-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GREEN} stopOpacity={0.18} />
          <stop offset="100%" stopColor={GREEN} stopOpacity={0} />
        </linearGradient>
      </defs>
      <line
        x1={0}
        x2={W}
        y1={H - 0.5}
        y2={H - 0.5}
        stroke={DIVIDER}
        strokeWidth={1}
      />
      <path d={areaPath} fill="url(#cf1-spark)" />
      <path
        d={linePath}
        fill="none"
        stroke={GREEN}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={endX} cy={endY} r={2} fill={GREEN} />
    </svg>
  );
}

function ArrowGlyph({
  direction,
  color,
}: {
  direction: "up" | "down";
  color: string;
}) {
  return direction === "up" ? (
    <svg width={9} height={9} viewBox="0 0 9 9" aria-hidden>
      <path
        d="M2 7 L7 2 M4.5 2 H7 V4.5"
        fill="none"
        stroke={color}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg width={9} height={9} viewBox="0 0 9 9" aria-hidden>
      <path
        d="M2 2 L7 7 M7 4.5 V7 H4.5"
        fill="none"
        stroke={color}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron() {
  return (
    <svg width={6} height={10} viewBox="0 0 6 10" aria-hidden>
      <path
        d="M1 1 L5 5 L1 9"
        fill="none"
        stroke={TEXT_FAINT}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TONE_COLOR = {
  good: GREEN,
  warn: AMBER,
  bad: RED,
} as const;

function BarRow({ row }: { row: Row }) {
  const deltaColor = TONE_COLOR[row.delta.tone];
  const barH = 6;

  return (
    <div
      className="cf1-row"
      style={{
        display: "grid",
        gridTemplateColumns: "236px 1fr 64px 96px 14px",
        columnGap: 18,
        alignItems: "center",
        padding: "8px 10px",
        margin: "0 -10px",
        borderRadius: 6,
      }}
    >
      {/* Identity */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 13,
            color: TEXT_INK,
            fontWeight: 600,
            letterSpacing: "-0.005em",
            lineHeight: 1.25,
          }}
        >
          <span>{row.label}</span>
          {row.live ? <LiveDot /> : null}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: TEXT_FAINT,
            marginTop: 3,
            lineHeight: 1.3,
            letterSpacing: "0.005em",
          }}
        >
          {row.sublabel}
          {row.schemes !== null ? (
            <>
              <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
              <span style={{ color: TEXT_MUTED, fontWeight: 500 }}>
                {row.schemes} schemes
              </span>
            </>
          ) : null}
        </div>
      </div>

      {/* Bar */}
      <div
        style={{
          height: barH,
          background: TRACK,
          borderRadius: barH / 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${row.pct}%`,
            minWidth: barH,
            height: "100%",
            background: row.color,
            borderRadius: barH / 2,
          }}
        />
      </div>

      {/* Percentage */}
      <div
        style={{
          textAlign: "right",
          fontSize: 12,
          fontWeight: 500,
          color: TEXT_MUTED,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.005em",
        }}
      >
        {row.pct.toFixed(1)}%
      </div>

      {/* Count + Delta */}
      <div
        style={{
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 2,
        }}
      >
        <div
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: TEXT_INK,
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.012em",
            lineHeight: 1,
          }}
        >
          {row.value.toLocaleString("en-GB")}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            fontSize: 10.5,
            fontWeight: 500,
            color: deltaColor,
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.005em",
          }}
        >
          <ArrowGlyph direction={row.delta.arrow} color={deltaColor} />
          <span>{row.delta.value}</span>
          <span style={{ color: TEXT_FAINT, fontWeight: 400 }}>· 7d</span>
        </div>
      </div>

      {/* Drilldown chevron */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Chevron />
      </div>
    </div>
  );
}

export function ComplianceFeature1() {
  const cardW = 760;
  const cardH = 376;
  const cardLeft = (FRAME_W - cardW) / 2;
  const cardTop = (FRAME_H - cardH) / 2;

  return (
    <Frame>
      <style>{`
        @keyframes cf1-ping {
          0%   { transform: scale(0.55); opacity: 0.55; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
        .cf1-row { transition: background-color 120ms ease; }
        .cf1-row:hover { background-color: ${HOVER_BG}; }
      `}</style>
      <div
        style={{
          position: "absolute",
          left: cardLeft,
          top: cardTop,
          width: cardW,
          height: cardH,
          background: SURFACE,
          borderRadius: 12,
          padding: "20px 26px",
          border: `1px solid ${BORDER}`,
          boxShadow:
            "0 1px 2px rgba(15, 13, 30, 0.04), 0 16px 40px -20px rgba(15, 13, 30, 0.20)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <StatusDot color={GREEN} />
              <span
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: TEXT_FAINT,
                  fontWeight: 600,
                }}
              >
                Portfolio monitoring
              </span>
            </div>
            <h3
              style={{
                margin: "6px 0 0",
                fontSize: 17,
                fontWeight: 600,
                color: TEXT_INK,
                letterSpacing: "-0.018em",
                lineHeight: 1.25,
              }}
            >
              Risk surfaced months before resale
            </h3>
            <p
              style={{
                margin: "5px 0 0",
                fontSize: 12.5,
                color: TEXT_MUTED,
                lineHeight: 1.5,
                maxWidth: 460,
                letterSpacing: "0.001em",
              }}
            >
              {TOTAL.toLocaleString("en-GB")} units monitored continuously
              across lease length, EWS1, EPC, and lender criteria
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
              flexShrink: 0,
            }}
          >
            <Sparkline />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 11,
                fontWeight: 500,
                color: GREEN,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "0.005em",
              }}
            >
              <ArrowGlyph direction="down" color={GREEN} />
              <span>14% · 30d</span>
            </div>
            <div
              style={{
                fontSize: 10,
                color: TEXT_FAINT,
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "0.02em",
                marginTop: 1,
              }}
            >
              14:32 GMT · today
            </div>
          </div>
        </div>

        {/* Column header strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "236px 1fr 64px 96px 14px",
            columnGap: 18,
            alignItems: "center",
            marginTop: 18,
            paddingBottom: 8,
            borderBottom: `1px solid ${DIVIDER}`,
            fontSize: 9.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: TEXT_FAINT,
            fontWeight: 600,
          }}
        >
          <div>Status</div>
          <div>Distribution</div>
          <div style={{ textAlign: "right" }}>Share</div>
          <div style={{ textAlign: "right" }}>Units · Δ7d</div>
          <div />
        </div>

        {/* Rows */}
        <div
          style={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {ROWS.map((row) => (
            <BarRow key={row.label} row={row} />
          ))}
        </div>

        {/* Footer pinned to bottom */}
        <div style={{ flex: 1 }} />
        <div
          style={{
            marginTop: 14,
            paddingTop: 12,
            borderTop: `1px solid ${DIVIDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                position: "relative",
                width: 5,
                height: 5,
                display: "inline-block",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: GREEN,
                  opacity: 0.4,
                  animation: "cf1-ping 2.6s ease-out infinite",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: GREEN,
                }}
              />
            </span>
            <span
              style={{
                fontSize: 10.5,
                color: TEXT_MUTED,
                lineHeight: 1.4,
                letterSpacing: "0.005em",
              }}
            >
              Live
              <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
              Ingested leases, EPCs, management packs
            </span>
          </div>
          <span
            style={{
              fontSize: 10,
              color: TEXT_FAINT,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.02em",
            }}
          >
            v2.4 · sync 2s
          </span>
        </div>
      </div>
    </Frame>
  );
}
