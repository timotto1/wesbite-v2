"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/animation/Reveal";

export function FinanceFullHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "calc(100vh + 56px)",
        marginTop: "-56px",
        paddingTop: "56px",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        backgroundColor: "hsl(263, 88%, 19%)",
        backgroundImage: [
          "radial-gradient(ellipse 80% 70% at 100% 100%, hsl(240, 90%, 6%), hsla(240, 88%, 10%, 0.85) 30%, transparent 70%)",
          "radial-gradient(ellipse 70% 80% at 100% 50%, hsla(240, 88%, 14%, 0.85), transparent 60%)",
          "radial-gradient(ellipse 90% 60% at 60% 110%, hsla(240, 88%, 12%, 0.8), transparent 55%)",
          "conic-gradient(from 90deg at 25% 50%, #0A0118 0deg, #0A0118 70deg, hsl(218, 85%, 76%) 130deg, hsl(48, 25%, 92%) 180deg, hsl(34, 90%, 62%) 220deg, hsl(342, 75%, 48%) 260deg, #0A0118 295deg, #0A0118 360deg)",
        ].join(", "),
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundColor: "hsl(263, 88%, 8%)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 2000ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <img
        src="/simple-logo.svg"
        alt="Stairpay"
        className="pointer-events-none absolute"
        style={{
          left: "20%",
          top: "50%",
          width: "256px",
          height: "256px",
          transform: "translate(-50%, -50%)",
          opacity: loaded ? 1 : 0,
          transition: "opacity 2000ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="absolute text-white"
        style={{
          left: "calc(20% + 240px)",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Reveal delay={1200} duration={3000}>
          <h1 className="text-[72px] font-semibold leading-none tracking-tight">
            Finance
          </h1>
        </Reveal>
        <Reveal delay={1500} className="mt-6">
          <p className="text-heading-md">
            Know your residents. De-risk your portfolio.
          </p>
        </Reveal>
        <Reveal delay={1800} className="mt-4">
          <p className="max-w-xl text-body-sm text-white">
            Coming soon. Register your interest to stay up to date and get
            notified when Finance is released.
          </p>
        </Reveal>
        <Reveal delay={2100} className="mt-8 inline-block">
          <button
            type="button"
            className="rounded-md border px-5 py-1.5 text-body-sm font-medium transition-colors duration-300 hover:bg-white/[0.06]"
            style={{
              borderColor: "hsl(264, 30%, 75%)",
              color: "hsl(264, 30%, 75%)",
            }}
          >
            Register your interest
          </button>
        </Reveal>
      </div>
    </section>
  );
}
