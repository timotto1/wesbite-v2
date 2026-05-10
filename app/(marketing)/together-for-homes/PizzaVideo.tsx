"use client";

import { useEffect, useRef, useState } from "react";

interface PizzaVideoProps {
  src: string;
  poster?: string;
  /** Playback speed multiplier (default 1). */
  playbackRate?: number;
}

export function PizzaVideo({ src, poster, playbackRate = 1 }: PizzaVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.playbackRate = playbackRate;
    const onPlay = () => {
      v.playbackRate = playbackRate;
    };
    v.addEventListener("play", onPlay);
    v.addEventListener("loadedmetadata", onPlay);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("loadedmetadata", onPlay);
    };
  }, [playbackRate]);

  const goFullscreen = () => {
    const v = ref.current;
    if (!v) return;
    const req =
      v.requestFullscreen ||
      (v as unknown as { webkitRequestFullscreen?: () => Promise<void> })
        .webkitRequestFullscreen;
    if (req) req.call(v);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = ref.current;
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
    <div className="group relative mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-card bg-paper-panel">
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Expand video to fullscreen"
        className="absolute inset-0 z-0 cursor-zoom-in"
      >
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </button>

      <div className="absolute bottom-3 right-3 z-10 flex gap-2 opacity-90 transition-opacity group-hover:opacity-100">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={paused ? "Play video" : "Pause video"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-paper backdrop-blur-md transition-colors hover:bg-black/70"
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          type="button"
          onClick={goFullscreen}
          aria-label="Expand video to fullscreen"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-paper backdrop-blur-md transition-colors hover:bg-black/70"
        >
          <ExpandIcon />
        </button>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
