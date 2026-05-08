import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

const PURPLE_DARK = "#26045D";
const PURPLE_MID = "#7114E2";
const PURPLE_LIGHT = "#AE78F1";
const PURPLE_LIGHTER = "#E5DAFB";

const GREEN_PILL_BG = "#DCEFE3";
const GREEN_PILL_FG = "#1B6F44";

const TEXT_INK = "#1A1530";
const TEXT_MUTED = "#7B7A88";
const RULE = "#E8E5EE";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[25px]"
      style={{
        aspectRatio: `${FRAME_W} / ${FRAME_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/images/listings/background-gradient.png')",
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

type Metric = {
  label: string;
  value: string;
  delta: string;
  deltaTone: "positive";
};

const METRICS: Metric[] = [
  { label: "AVG. DAYS ON MARKET", value: "42", delta: "−18%", deltaTone: "positive" },
  { label: "RESERVATION RATE", value: "68%", delta: "+6 pts", deltaTone: "positive" },
];

type Source = { label: string; pct: number; color: string };

const SOURCES: Source[] = [
  { label: "Share to Buy", pct: 38, color: PURPLE_DARK },
  { label: "RightMove", pct: 28, color: PURPLE_MID },
  { label: "Direct site", pct: 22, color: PURPLE_LIGHT },
  { label: "Zoopla", pct: 12, color: PURPLE_LIGHTER },
];

type FunnelRow = { label: string; value: string; pct: number };

const FUNNEL: FunnelRow[] = [
  { label: "Enquiries", value: "1,284", pct: 100 },
  { label: "Viewings", value: "796", pct: 62 },
  { label: "Offers", value: "398", pct: 31 },
  { label: "Reservations", value: "270", pct: 21 },
];

function ChartBox({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        border: `1px solid ${RULE}`,
        borderRadius: 14,
        padding: "20px 22px",
        background: "#FFFFFF",
      }}
    >
      {children}
    </div>
  );
}

function MetricTile({ metric }: { metric: Metric }) {
  return (
    <div
      style={{
        border: `1px solid ${RULE}`,
        borderRadius: 12,
        padding: "16px 18px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.08em",
          color: TEXT_MUTED,
          fontWeight: 500,
        }}
      >
        {metric.label}
      </div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 8 }}>
        <span
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: TEXT_INK,
            lineHeight: 1,
          }}
        >
          {metric.value}
        </span>
        <span
          style={{
            background: GREEN_PILL_BG,
            color: GREEN_PILL_FG,
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 7px",
            borderRadius: 5,
            lineHeight: 1.4,
          }}
        >
          {metric.delta}
        </span>
      </div>
    </div>
  );
}

function FunnelChart() {
  const barHeight = 30;
  const labelColWidth = 96;
  const pctColWidth = 38;
  const sourceTotal = SOURCES.reduce((s, x) => s + x.pct, 0);
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.08em",
          color: TEXT_MUTED,
          fontWeight: 500,
          marginBottom: 18,
        }}
      >
        SALES FUNNEL · LAST 90 DAYS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {FUNNEL.map((row) => (
          <div
            key={row.label}
            style={{
              display: "grid",
              gridTemplateColumns: `${labelColWidth}px 1fr ${pctColWidth}px`,
              alignItems: "center",
              columnGap: 12,
            }}
          >
            <div style={{ fontSize: 13, color: TEXT_INK, fontWeight: 500 }}>
              {row.label}
            </div>
            <div
              style={{
                height: barHeight,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: `${row.pct}%`,
                  height: barHeight,
                  borderRadius: barHeight / 2,
                  overflow: "hidden",
                  display: "flex",
                  boxShadow: "inset 0 0 0 1px rgba(38, 4, 93, 0.05)",
                }}
              >
                {SOURCES.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      flex: `${s.pct / sourceTotal} 0 0`,
                      background: s.color,
                      height: "100%",
                    }}
                  />
                ))}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    pointerEvents: "none",
                  }}
                >
                  {row.value}
                </div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, textAlign: "right" }}>
              {row.pct}%
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 22,
          paddingTop: 16,
          borderTop: `1px solid ${RULE}`,
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 22px",
        }}
      >
        {SOURCES.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: s.color,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12, color: TEXT_INK, fontWeight: 500 }}>
              {s.label}
            </span>
            <span style={{ fontSize: 11, color: TEXT_MUTED }}>{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ListingsFeature4() {
  return (
    <Frame>
      <div
        style={{
          position: "absolute",
          left: 28,
          right: 28,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#FFFFFF",
          borderRadius: 25,
          padding: "26px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
          {METRICS.map((m) => (
            <MetricTile key={m.label} metric={m} />
          ))}
        </div>
        <ChartBox>
          <FunnelChart />
        </ChartBox>
      </div>
    </Frame>
  );
}
