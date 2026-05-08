import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

// Surface — same tokens as ComplianceFeature1
const SURFACE = "#FBFAF6";
const BORDER = "#E3E0D8";
const DIVIDER = "#ECE9E1";

// Type stack
const TEXT_INK = "#1B1A2A";
const TEXT_MUTED = "#6E6C7B";
const TEXT_FAINT = "#9C9AA6";

// Status palette
const GREEN = "#137A50";
const AMBER = "#9D6E12";

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

type Field = { label: string; value: string; warn?: boolean };

const LEASE_TERMS: Field[] = [
  { label: "Term", value: "99 years" },
  { label: "Expiry", value: "23 May 2102" },
  { label: "Staircase cap", value: "100%" },
  { label: "Resale restriction", value: "HA pre-emption" },
  { label: "Lender protection", value: "Mortgage protected" },
  { label: "Subletting", value: "With consent" },
];

const FINANCIALS: Field[] = [
  { label: "Ground rent", value: "£250 / yr" },
  { label: "Review basis", value: "RPI · 5-yearly" },
  { label: "Service charge", value: "£148 / mo" },
  { label: "Sinking fund", value: "10% reserve" },
  { label: "Insurance recharge", value: "Pro-rata" },
  { label: "Non-standard clauses", value: "1 flagged", warn: true },
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

/* Stylised PDF — hairline rectangle, layered text-line bars, page indicator */
function PdfDoc({ width, height }: { width: number; height: number }) {
  const lines = [82, 95, 70, 88, 60, 90, 75, 72, 86, 64, 92, 70, 84];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
      <div
        style={{
          width,
          height,
          background: "#FFFFFF",
          border: `1px solid ${BORDER}`,
          borderRadius: 6,
          padding: "14px 12px 18px",
          position: "relative",
          boxShadow:
            "0 1px 1px rgba(28, 24, 40, 0.03), 0 8px 18px -10px rgba(28, 24, 40, 0.10)",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {/* Document header bar */}
        <div
          style={{
            height: 5,
            width: "62%",
            background: TEXT_INK,
            opacity: 0.55,
            borderRadius: 1.5,
          }}
        />
        <div
          style={{
            height: 1,
            background: DIVIDER,
            margin: "4px 0 6px",
          }}
        />
        {/* Text-line bars */}
        {lines.map((w, i) => (
          <div
            key={i}
            style={{
              height: 2.5,
              width: `${w}%`,
              background: i % 5 === 4 ? "#E1DED6" : "#D7D4CB",
              borderRadius: 1.5,
            }}
          />
        ))}
        {/* Page indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 10,
            fontSize: 8,
            letterSpacing: "0.08em",
            color: TEXT_FAINT,
            fontWeight: 600,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          47 / 47
        </div>
      </div>
      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: TEXT_FAINT,
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Lease PDF
        <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
        47 pages
        <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
        Unstructured
      </div>
    </div>
  );
}

/* Connecting arrow — line broken by an "Extracted" pill */
function ExtractedArrow() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 1,
        background: BORDER,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: SURFACE,
          padding: "3px 10px",
          fontSize: 9.5,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: TEXT_FAINT,
          fontWeight: 600,
          whiteSpace: "nowrap",
          border: `1px solid ${BORDER}`,
          borderRadius: 4,
        }}
      >
        Extracted
      </div>
      <svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        style={{
          position: "absolute",
          right: -4,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        aria-hidden
      >
        <path
          d="M1 5 H8 M5 2 L8 5 L5 8"
          fill="none"
          stroke={BORDER}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function FieldGroup({ heading, fields }: { heading: string; fields: Field[] }) {
  return (
    <div>
      <div
        style={{
          fontSize: 10.5,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: TEXT_FAINT,
          fontWeight: 600,
          paddingBottom: 8,
          borderBottom: `1px solid ${DIVIDER}`,
          marginBottom: 12,
        }}
      >
        {heading}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          columnGap: 12,
          rowGap: 9,
          alignItems: "baseline",
        }}
      >
        {fields.map((f) => (
          <div key={f.label} style={{ display: "contents" }}>
            <div
              style={{
                fontSize: 12,
                color: TEXT_MUTED,
                lineHeight: 1.4,
              }}
            >
              {f.label}
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: f.warn ? AMBER : TEXT_INK,
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1.4,
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 6,
              }}
            >
              {f.warn ? (
                <svg
                  width={9}
                  height={9}
                  viewBox="0 0 9 9"
                  aria-hidden
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M4.5 0.7 L8.4 8.0 L0.6 8.0 Z"
                    fill="none"
                    stroke={AMBER}
                    strokeWidth={1.1}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 3.4 V5.6"
                    stroke={AMBER}
                    strokeWidth={1.1}
                    strokeLinecap="round"
                  />
                  <circle cx={4.5} cy={6.7} r={0.55} fill={AMBER} />
                </svg>
              ) : null}
              {f.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComplianceFeature2() {
  const cardW = 740;
  const cardH = 420;
  const cardLeft = (FRAME_W - cardW) / 2;
  const cardTop = (FRAME_H - cardH) / 2;

  return (
    <Frame>
      <div
        style={{
          position: "absolute",
          left: cardLeft,
          top: cardTop,
          width: cardW,
          height: cardH,
          background: SURFACE,
          borderRadius: 14,
          padding: "24px 28px",
          border: `1px solid ${BORDER}`,
          boxShadow:
            "0 1px 2px rgba(28, 24, 40, 0.04), 0 14px 36px -18px rgba(28, 24, 40, 0.18)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div>
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
              AI lease extraction
            </span>
          </div>
          <h3
            style={{
              margin: "8px 0 0",
              fontSize: 20,
              fontWeight: 600,
              color: TEXT_INK,
              letterSpacing: "-0.018em",
              lineHeight: 1.22,
            }}
          >
            Every clause that matters, on every lease
          </h3>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: 13,
              color: TEXT_MUTED,
              lineHeight: 1.5,
              maxWidth: 540,
              letterSpacing: "0.001em",
            }}
          >
            Hours of legal review per case, returned in seconds — every value
            traceable to its source clause.
          </p>
        </div>

        {/* Hairline divider */}
        <div
          style={{
            height: 1,
            background: DIVIDER,
            marginTop: 20,
            marginBottom: 20,
          }}
        />

        {/* Two-pane visual */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 56px 1fr",
            columnGap: 14,
            alignItems: "center",
          }}
        >
          <PdfDoc width={120} height={170} />
          <ExtractedArrow />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 24,
              alignSelf: "stretch",
            }}
          >
            <FieldGroup heading="Lease terms" fields={LEASE_TERMS} />
            <FieldGroup heading="Financial & escalators" fields={FINANCIALS} />
          </div>
        </div>

        {/* Footer pinned to bottom */}
        <div style={{ flex: 1 }} />
        <div
          style={{
            marginTop: 18,
            paddingTop: 14,
            borderTop: `1px solid ${DIVIDER}`,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            stroke={TEXT_FAINT}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            style={{ flexShrink: 0 }}
          >
            <path d="M2.5 6.2 L5 8.7 L9.7 4" />
          </svg>
          <span
            style={{
              fontSize: 11,
              color: TEXT_FAINT,
              lineHeight: 1.45,
              letterSpacing: "0.005em",
            }}
          >
            Every value traceable
            <span style={{ color: DIVIDER, margin: "0 8px" }}>·</span>
            Linked to source clause and page
          </span>
        </div>
      </div>
    </Frame>
  );
}
