"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

type MacWindowProps = {
  title: string;
  children: ReactNode;
};

export function MacWindow({ title, children }: MacWindowProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const drag = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const winRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const win = winRef.current;
    if (!stage || !win) return;
    setPos({
      x: Math.max(0, (stage.clientWidth - win.offsetWidth) / 2),
      y: 24,
    });
    setReady(true);
  }, []);

  function clamp(x: number, y: number) {
    const stage = stageRef.current;
    const win = winRef.current;
    if (!stage || !win) return { x, y };
    const maxX = Math.max(0, stage.clientWidth - win.offsetWidth);
    const maxY = Math.max(0, stage.clientHeight - win.offsetHeight);
    return {
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    };
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: pos.x,
      baseY: pos.y,
    };
    setIsDragging(true);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    setPos(clamp(drag.current.baseX + dx, drag.current.baseY + dy));
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    drag.current = null;
    setIsDragging(false);
  }

  return (
    <div
      ref={stageRef}
      className="relative h-[640px] w-full overflow-hidden rounded-card md:h-[820px]"
    >
      <div
        ref={winRef}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: ready ? 1 : 0,
        }}
        className="absolute w-[min(1180px,100%)] overflow-hidden rounded-[10px] border border-black/15 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.30),0_10px_20px_-5px_rgba(0,0,0,0.10)]"
      >
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`relative flex h-9 items-center border-b border-black/10 bg-[#E8E8E8] touch-none select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex gap-2 pl-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[13px] font-medium text-[#3D3D3D]">
            {title}
          </div>
        </div>
        <div className="bg-white">{children}</div>
      </div>
    </div>
  );
}
