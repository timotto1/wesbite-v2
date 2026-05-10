import type { ReactNode } from "react";

const SCREEN_W = 240;
const SCREEN_H = 502;

type PhoneFrameProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  className?: string;
};

export function PhoneFrame({
  children,
  width = SCREEN_W,
  height = SCREEN_H,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={`relative flex-none rounded-[40px] bg-[#0a0a0a] p-[7px] shadow-[0_30px_60px_-20px_rgba(38,4,93,0.35)] ${className ?? ""}`}
      style={{ width: width + 14, height: height + 14 }}
    >
      <div
        className="overflow-hidden bg-[#FBF9FF]"
        style={{ width, height, borderRadius: 33 }}
      >
        {children}
      </div>
    </div>
  );
}
