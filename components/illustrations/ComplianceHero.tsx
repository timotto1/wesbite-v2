import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;
const GRADIENT_H = 714;

const PURPLE_DARK = "#26045D";

const TEXT_INK = "#1A1530";
const TEXT_MUTED = "#7B7A88";
const RULE = "#E8E5EE";
const TRACK = "#F0EBF8";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: `${FRAME_W} / ${FRAME_H}`,
        containerType: "inline-size",
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

type Term = { label: string; value: string; confidence: number };

const TERMS: Term[] = [
  { label: "LEASE LENGTH", value: "78 years remaining", confidence: 96 },
  { label: "GROUND RENT", value: "£250 / yr · doubling 2030", confidence: 92 },
  { label: "STAIRCASING CAP", value: "Up to 100%", confidence: 98 },
  { label: "SERVICE CHARGE", value: "£148 / mo · reviewable", confidence: 94 },
  { label: "FORFEITURE TRIGGER", value: "Rent arrears > 30 days", confidence: 88 },
];

function ExtractedTerms() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          color: TEXT_MUTED,
          fontWeight: 600,
        }}
      >
        EXTRACTED TERMS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {TERMS.map((t, i) => (
          <div
            key={t.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              paddingBottom: 14,
              borderBottom: i < TERMS.length - 1 ? `1px solid ${RULE}` : "none",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.08em",
                color: TEXT_MUTED,
                fontWeight: 500,
              }}
            >
              {t.label}
            </div>
            <div
              style={{
                fontSize: 15,
                color: TEXT_INK,
                fontWeight: 500,
                letterSpacing: "-0.005em",
              }}
            >
              {t.value}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 2,
              }}
            >
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  height: 4,
                  background: TRACK,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${t.confidence}%`,
                    height: "100%",
                    background: PURPLE_DARK,
                    borderRadius: 2,
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: TEXT_MUTED,
                  fontWeight: 500,
                  minWidth: 32,
                  textAlign: "right",
                }}
              >
                {t.confidence}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComplianceHero() {
  const cardLeft = 60;
  const cardTop = 70;
  const cardW = 420;
  const cardH = 580;

  const leaseLeft = 410;
  const leaseTop = 200;
  const leaseW = 600;

  return (
    <Frame>
      {/* Background gradient card — clips everything inside */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: FRAME_W,
          height: GRADIENT_H,
          borderRadius: 25,
          backgroundImage: "url('/images/compliance/background-gradient.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* Lease document — right side, clipped by the gradient on the right and bottom */}
        <div
          style={{
            position: "absolute",
            left: leaseLeft,
            top: leaseTop,
            width: leaseW,
            borderRadius: 14,
            overflow: "hidden",
            boxShadow:
              "0 18px 50px rgba(38, 4, 93, 0.20), 0 4px 12px rgba(38, 4, 93, 0.10)",
            background: "#FFFFFF",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/compliance/lease.png"
            alt="Sample lease document"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* White card with extracted terms — left side, overlaps the lease */}
        <div
          style={{
            position: "absolute",
            left: cardLeft,
            top: cardTop,
            width: cardW,
            height: cardH,
            background: "#FFFFFF",
            borderRadius: 22,
            padding: "26px 30px",
            boxShadow:
              "0 24px 60px rgba(38, 4, 93, 0.20), 0 6px 18px rgba(38, 4, 93, 0.10)",
            border: `1px solid ${RULE}`,
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <ExtractedTerms />
        </div>
      </div>
    </Frame>
  );
}
