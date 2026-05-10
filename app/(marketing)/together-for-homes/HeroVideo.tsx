"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const IDLE_AFTER_MS = 3000;

interface HeroVideoProps {
  videoSources: string[];
}

export function HeroVideo({ videoSources }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [idle, setIdle] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const wake = () => {
      setIdle(false);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), IDLE_AFTER_MS);
    };
    wake();
    window.addEventListener("mousemove", wake, { passive: true });
    window.addEventListener("touchstart", wake, { passive: true });
    window.addEventListener("keydown", wake);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("touchstart", wake);
      window.removeEventListener("keydown", wake);
    };
  }, []);

  const goFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    const req =
      v.requestFullscreen ||
      (v as unknown as { webkitRequestFullscreen?: () => Promise<void> })
        .webkitRequestFullscreen;
    if (req) req.call(v);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section
      className="relative flex min-h-[100vh] items-end overflow-hidden bg-ink"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Expand video to fullscreen"
        className="group absolute inset-0 z-0 cursor-zoom-in"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          {videoSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75 transition-colors duration-300 group-hover:from-black/5 group-hover:to-black/65" />
      </button>

      <div
        className={`absolute bottom-6 right-6 z-20 flex gap-2 transition-opacity duration-700 ${
          idle ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? "Play video" : "Pause video"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-paper backdrop-blur-md transition-colors hover:bg-white/20"
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          type="button"
          onClick={goFullscreen}
          aria-label="Expand video to fullscreen"
          className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-[12px] font-normal tracking-[0.5px] text-paper backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ExpandIcon />
          <span>Expand</span>
        </button>
      </div>

      <div
        className={`relative z-10 mx-auto w-full max-w-page px-section pb-14 pt-32 md:pb-20 ${
          idle ? "opacity-0" : "opacity-100"
        } pointer-events-none transition-opacity duration-700`}
      >
        <div
          className="w-full"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 1000ms cubic-bezier(0.16,1,0.3,1) 300ms, transform 1000ms cubic-bezier(0.16,1,0.3,1) 300ms",
          }}
        >
          <span className="pointer-events-auto inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-eyebrow uppercase text-paper backdrop-blur-md">
            16 September 2026 · Battersea Park
          </span>

          <h1
            className="mt-5 whitespace-nowrap pb-2 text-display-lg !font-light text-paper md:text-display-xl"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 1000ms cubic-bezier(0.16,1,0.3,1) 480ms, transform 1000ms cubic-bezier(0.16,1,0.3,1) 480ms",
            }}
          >
            We&rsquo;re lacing up again.
          </h1>

          <div
            className="pointer-events-auto mt-8 flex flex-wrap gap-3"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 1000ms cubic-bezier(0.16,1,0.3,1) 660ms, transform 1000ms cubic-bezier(0.16,1,0.3,1) 660ms",
            }}
          >
            <Link
              href="#tickets"
              className="group inline-flex items-center gap-2 rounded-[5px] border-hairline border-paper bg-paper px-5 py-2 text-body-sm font-medium text-ink transition-colors duration-200 hover:bg-paper-panel"
            >
              <span>Buy Tickets</span>
              <ArrowIcon />
            </Link>
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 rounded-[5px] border-hairline border-paper/60 bg-transparent px-5 py-2 text-body-sm font-medium text-paper transition-colors duration-200 hover:bg-white/10"
            >
              <span>About the Run</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M3 6h6m0 0L6 3m3 3L6 9"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}
