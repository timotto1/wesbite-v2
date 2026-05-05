import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#26045D",
          muted: "#4A4851",
          light: "#9094A0",
        },
        paper: {
          DEFAULT: "#F6F5F6",
          panel: "#F2F2EC",
          card: "#FFFFFF",
        },
        stairpay: {
          DEFAULT: "#26045D",
          soft: "#F0EBF8",
        },
        rule: {
          DEFAULT: "#E5E5DD",
          grid: "#F4F4EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["48px", { lineHeight: "1.05", letterSpacing: "0.02em", fontWeight: "300" }],
        "display-lg": ["40px", { lineHeight: "1.08", letterSpacing: "0.02em", fontWeight: "300" }],
        "heading-xl": ["32px", { lineHeight: "1.15", letterSpacing: "0.02em", fontWeight: "300" }],
        "heading-lg": ["26px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "400" }],
        "heading-md": ["22px", { lineHeight: "1.25", letterSpacing: "0.02em", fontWeight: "400" }],
        "heading-sm": ["18px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "1.5", fontWeight: "400" }],
        eyebrow: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      borderRadius: {
        card: "12px",
        pill: "9999px",
      },
      borderWidth: {
        hairline: "1px",
      },
      maxWidth: {
        prose: "680px",
        content: "1200px",
        page: "1440px",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--rule-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--rule-grid) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};

export default config;
