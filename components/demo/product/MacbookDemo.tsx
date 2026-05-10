"use client";

import { ProductDemoWindow } from "./ProductDemoWindow";

type ViewId =
  | "case"
  | "reporting"
  | "insights"
  | "listings"
  | "enquiries"
  | "units"
  | "developments"
  | "compliance";

export function MacbookDemo({ initialView }: { initialView?: ViewId } = {}) {
  return (
    <div className="relative mx-auto w-[85%]" style={{ aspectRatio: "1216 / 735" }}>
      <img
        src="/macbook-pro-14.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />
      <div
        className="absolute overflow-hidden"
        style={{
          left: "10.5%",
          top: "3.5%",
          width: "79%",
          height: "85.5%",
        }}
      >
        <div
          style={{
            width: `${100 / 0.85}%`,
            height: `${100 / 0.85}%`,
            transform: "scale(0.85)",
            transformOrigin: "top left",
          }}
        >
          <ProductDemoWindow initialView={initialView} />
        </div>
      </div>
    </div>
  );
}
