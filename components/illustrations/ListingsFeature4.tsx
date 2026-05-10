import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

const PURPLE = "#7114E2";
const TRACK_BG = "rgba(0, 0, 0, 0.06)";
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

type StatTile = {
  label: string;
  value: string;
  delta: string;
};

const STATS: StatTile[] = [
  { label: "Enquiry → reservation", value: "21.0%", delta: "+3.2 pts" },
  { label: "Avg. days on market", value: "42", delta: "−9 days" },
  { label: "Reservations completed", value: "270", delta: "+18%" },
];

type FunnelRow = { stage: string; count: string; pct: number };

const FUNNEL: FunnelRow[] = [
  { stage: "Enquiries", count: "1,284", pct: 100 },
  { stage: "Viewings", count: "796", pct: 62 },
  { stage: "Offers", count: "398", pct: 31 },
  { stage: "Reservations", count: "270", pct: 21 },
];

const DROPOFFS: { pct: string; rest: string }[] = [
  { pct: "62%", rest: "book a viewing" },
  { pct: "50%", rest: "make an offer" },
  { pct: "68%", rest: "reserve" },
];

function GreenArrowUp() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function StatTileView({ stat }: { stat: StatTile }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: TEXT_MUTED, fontWeight: 400 }}>
        {stat.label}
      </div>
      <div
        style={{
          marginTop: 8,
          display: "flex",
          alignItems: "baseline",
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: TEXT_INK,
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          {stat.value}
        </span>
        <span
          style={{
            background: GREEN_PILL_BG,
            color: GREEN_PILL_FG,
            fontSize: 11,
            fontWeight: 500,
            padding: "3px 8px",
            borderRadius: 999,
            lineHeight: 1.2,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            whiteSpace: "nowrap",
          }}
        >
          <GreenArrowUp />
          {stat.delta}
        </span>
      </div>
    </div>
  );
}

function Funnel() {
  const labelColWidth = 110;
  const pctColWidth = 44;
  const barHeight = 32;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {FUNNEL.map((row, i) => (
        <Fragment key={row.stage}>
          {i > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `${labelColWidth}px 1fr ${pctColWidth}px`,
                columnGap: 14,
                padding: "6px 0",
                alignItems: "center",
              }}
            >
              <div />
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  color: TEXT_MUTED,
                  fontWeight: 400,
                }}
              >
                <span style={{ color: TEXT_MUTED }}>
                  <DownArrow />
                </span>
                <span>
                  <span
                    style={{ fontWeight: 500, color: TEXT_INK, marginRight: 4 }}
                  >
                    {DROPOFFS[i - 1].pct}
                  </span>
                  {DROPOFFS[i - 1].rest}
                </span>
              </div>
              <div />
            </div>
          ) : null}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `${labelColWidth}px 1fr ${pctColWidth}px`,
              alignItems: "center",
              columnGap: 14,
              padding: "6px 0",
            }}
          >
            <div style={{ fontSize: 13, color: TEXT_INK, fontWeight: 500 }}>
              {row.stage}
            </div>
            <div
              style={{
                height: barHeight,
                borderRadius: 3,
                background: TRACK_BG,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${row.pct}%`,
                  height: "100%",
                  background: PURPLE,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 12,
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  {row.count}
                </span>
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                color: TEXT_MUTED,
                textAlign: "right",
                fontWeight: 500,
              }}
            >
              {row.pct}%
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export function ListingsFeature4() {
  return (
    <Frame>
      <div
        style={{
          position: "absolute",
          left: 32,
          right: 32,
          top: "50%",
          transform: "translateY(-50%)",
          background: "#FFFFFF",
          borderRadius: 18,
          border: `1px solid ${RULE}`,
          padding: "28px 32px 22px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header — eyebrow / subtitle / period label */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.08em",
                color: TEXT_MUTED,
                fontWeight: 500,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Resales pipeline
            </p>
            <p
              style={{
                margin: 0,
                marginTop: 6,
                fontSize: 14,
                color: TEXT_MUTED,
                fontWeight: 400,
              }}
            >
              Stage-by-stage conversion across all schemes
            </p>
          </div>
          <span style={{ fontSize: 11, color: TEXT_MUTED, fontWeight: 400 }}>
            Last 90 days
          </span>
        </div>

        {/* Three summary stat tiles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
            marginTop: 22,
          }}
        >
          {STATS.map((s) => (
            <StatTileView key={s.label} stat={s} />
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: `1px solid ${RULE}`,
            marginTop: 22,
            marginBottom: 18,
          }}
        />

        {/* Funnel */}
        <Funnel />

        {/* Footer */}
        <div
          style={{
            borderTop: `1px solid ${RULE}`,
            marginTop: 18,
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            color: TEXT_MUTED,
            fontWeight: 400,
          }}
        >
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <InfoIcon />
            All schemes, last 90 days · Compared to prior 90 days
          </span>
          <span>Example data</span>
        </div>
      </div>
    </Frame>
  );
}
