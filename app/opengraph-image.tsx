import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stairpay — The operating system for Shared Ownership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FAFAF7",
          backgroundImage:
            "linear-gradient(to right, #EDEDE5 1px, transparent 1px), linear-gradient(to bottom, #EDEDE5 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#1A1A1F",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          stairpay
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "76px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontWeight: 300,
            maxWidth: "1040px",
          }}
        >
          <span>The operating system for</span>
          <span style={{ color: "#26045D" }}>Shared Ownership.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "20px",
            color: "#5C5C66",
          }}
        >
          <span>One platform. Two sides. One source of truth.</span>
          <span style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>
            stairpay.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
