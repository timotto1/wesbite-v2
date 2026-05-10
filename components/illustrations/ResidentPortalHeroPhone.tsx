"use client";

import {
  StatusBar,
  TopBar,
  CtaHero,
  StatGrid,
  BottomNav,
} from "@/components/sections/previews/ResidentPortalPreview";

const SCREEN_W = 192;
const SCREEN_H = 402;

export function ResidentPortalHeroPhone() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative flex-none rounded-[36px] bg-[#0a0a0a] p-[6px] shadow-[0_30px_60px_-20px_rgba(38,4,93,0.35)]"
          style={{ width: SCREEN_W + 12, height: SCREEN_H + 12 }}
        >
          <div
            className="flex h-full flex-col overflow-hidden bg-[#FBF9FF] text-[#26045D] [letter-spacing:-0.02em]"
            style={{ width: SCREEN_W, height: SCREEN_H, borderRadius: 30 }}
          >
            <StatusBar />
            <TopBar />
            <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3 pb-3 pt-1">
              <CtaHero />
              <StatGrid />
            </div>
            <BottomNav />
          </div>
        </div>
      </div>

      <FloatingBubble className="left-[3%] top-[8%]">
        Can I afford to staircase?
      </FloatingBubble>
      <FloatingBubble className="left-[1%] top-[46%]">
        How much equity do I have?
      </FloatingBubble>
      <FloatingBubble className="bottom-[12%] right-[2%]">
        When&rsquo;s my service charge review?
      </FloatingBubble>
    </div>
  );
}

function FloatingBubble({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute max-w-[42%] rounded-[20px] bg-white px-5 py-3 shadow-[0_12px_30px_-10px_rgba(38,4,93,0.25)] ${className ?? ""}`}
    >
      <p className="text-[clamp(14px,1.6vw,22px)] font-medium leading-tight text-stairpay">
        {children}
      </p>
    </div>
  );
}
