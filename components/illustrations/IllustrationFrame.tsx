import type { ReactNode } from "react";

type IllustrationFrameProps = {
  children: ReactNode;
  aspect?: "4-3" | "5-4" | "3-2";
  tone?: "card" | "panel" | "soft";
  className?: string;
};

const ASPECT_CLASS = {
  "4-3": "aspect-[4/3]",
  "5-4": "aspect-[5/4]",
  "3-2": "aspect-[3/2]",
} as const;

const TONE_CLASS = {
  card: "bg-paper-card border-hairline border-rule",
  panel: "bg-paper-panel",
  soft: "bg-stairpay-soft",
} as const;

export function IllustrationFrame({
  children,
  aspect = "4-3",
  tone = "card",
  className = "",
}: IllustrationFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-card ${ASPECT_CLASS[aspect]} ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
