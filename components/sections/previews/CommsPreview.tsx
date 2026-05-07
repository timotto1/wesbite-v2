"use client";

import { useEffect, useState } from "react";

/**
 * Composite illustration for the Comms card.
 *
 * Cycles through 4 exchanges between a resident and either Stairpay's
 * assistant or the landlord. Each one plays as a typed conversation:
 *   1. Resident question types in (purple, right-aligned)
 *   2. Sender badge + loading dots appear
 *   3. Reply types in (white card, left-aligned)
 *   4. Hold a few seconds, fade out, advance.
 */

type Sender = "ai" | "landlord";

type Exchange = {
  question: string;
  answer: string;
  sender: Sender;
};

const EXCHANGES: Exchange[] = [
  {
    question: "Can I staircase to 100%?",
    answer:
      "Yes. According to your lease, there are no limits on your staircasing potential. Do you want to use our calculator to see if you can afford to staircase right now?",
    sender: "ai",
  },
  {
    question: "When is my next rent payment due?",
    answer:
      "Your next payment of £487.50 is due on 1 June. I can set a reminder a few days before if that helps.",
    sender: "ai",
  },
  {
    question: "Can I keep a small dog in my flat?",
    answer:
      "Small pets are fine under your lease with prior approval — I'll send through the pet agreement form today.",
    sender: "landlord",
  },
  {
    question: "There's a leak in the bathroom ceiling — who covers the repair?",
    answer:
      "Thanks for flagging this. Structural repairs are our responsibility — I've raised it with maintenance and they'll be in touch within 24 hours.",
    sender: "landlord",
  },
];

type Phase = "type-q" | "loading" | "type-a" | "shown" | "exiting";

const Q_PER_CHAR_MS = 32;
const PAUSE_AFTER_Q_MS = 450;
const LOADING_MS = 2400;
const READ_BEFORE_ACTIONS_MS = 700; // brief beat between answer appearing and action icons appearing
const HOLD_AFTER_A_MS = 3000;
const EXIT_MS = 500;
const RESET_GAP_MS = 200;

export function CommsPreview() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("type-q");
  const [qLen, setQLen] = useState(0);
  const [aLen, setALen] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(() => resolve(), ms);
        timeouts.push(id);
      });

    const typeUp = async (
      text: string,
      setLen: (n: number) => void,
      perChar: number,
    ) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setLen(i);
        if (i < text.length) {
          const jitter = perChar * (0.7 + Math.random() * 0.7);
          await sleep(jitter);
        }
      }
    };

    let activeIndex = 0;

    const run = async () => {
      while (!cancelled) {
        const ex = EXCHANGES[activeIndex];

        setIndex(activeIndex);
        setPhase("type-q");
        setQLen(0);
        setALen(0);
        await sleep(RESET_GAP_MS);
        if (cancelled) return;

        await typeUp(ex.question, setQLen, Q_PER_CHAR_MS);
        if (cancelled) return;
        await sleep(PAUSE_AFTER_Q_MS);
        if (cancelled) return;

        setPhase("loading");
        await sleep(LOADING_MS);
        if (cancelled) return;

        // Answer appears in full once loading finishes — no per-character typing.
        setPhase("type-a");
        setALen(ex.answer.length);
        await sleep(READ_BEFORE_ACTIONS_MS);
        if (cancelled) return;

        setPhase("shown");
        await sleep(HOLD_AFTER_A_MS);
        if (cancelled) return;

        setPhase("exiting");
        await sleep(EXIT_MS);
        if (cancelled) return;

        activeIndex = (activeIndex + 1) % EXCHANGES.length;
      }
    };

    run();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const exchange = EXCHANGES[index];
  const visibleQ = exchange.question.slice(0, qLen);
  const visibleA = exchange.answer.slice(0, aLen);

  const showQuestion = qLen > 0;
  const showReplySection =
    phase === "loading" || phase === "type-a" || phase === "shown" || phase === "exiting";
  const showLoadingDots = phase === "loading";
  const showAnswerBubble =
    (phase === "type-a" || phase === "shown" || phase === "exiting") && aLen > 0;
  const showActions = exchange.sender === "ai" && phase === "shown";
  const isExiting = phase === "exiting";

  return (
    <div
      className={`relative h-full w-full ${isExiting ? "animate-comms-exit-fade" : ""}`}
    >
      <div className="flex h-full flex-col justify-end pb-10">
        {showQuestion && <QuestionBubble text={visibleQ} />}
        {showReplySection && (
          <div className="comms-section-enter overflow-hidden">
            <div className="comms-section-content flex flex-col gap-1.5 pt-2.5">
              <SenderRow sender={exchange.sender} />
              {showLoadingDots && <LoadingBubble />}
              {showAnswerBubble && <AnswerBubble text={visibleA} />}
              {showActions && <ActionIcons />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="comms-bubble-grow max-w-[80%] rounded-[20px] border border-[#ECE9F0] bg-white px-4 py-2 text-[11px] font-medium leading-relaxed text-stairpay shadow-[0_1px_2px_rgba(38,4,93,0.04)]">
        {text}
      </div>
    </div>
  );
}

function AnswerBubble({ text }: { text: string }) {
  return (
    <div className="comms-answer-in max-w-[92%] rounded-2xl border border-[#ECE9F0] bg-white px-4 py-3 text-[11px] leading-relaxed text-[#26045D] shadow-[0_1px_2px_rgba(38,4,93,0.04)]">
      {text}
    </div>
  );
}

function LoadingBubble() {
  return (
    <div className="inline-flex items-center gap-1.5 self-start rounded-2xl border border-[#ECE9F0] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(38,4,93,0.04)]">
      <span
        className="h-1.5 w-1.5 rounded-full bg-[#9994A3] animate-comms-dot"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="h-1.5 w-1.5 rounded-full bg-[#9994A3] animate-comms-dot"
        style={{ animationDelay: "180ms" }}
      />
      <span
        className="h-1.5 w-1.5 rounded-full bg-[#9994A3] animate-comms-dot"
        style={{ animationDelay: "360ms" }}
      />
    </div>
  );
}

function SenderRow({ sender }: { sender: Sender }) {
  const isAi = sender === "ai";
  return (
    <div className="flex items-center gap-1.5 pl-1">
      {isAi ? <AiBadge /> : <LandlordBadge />}
      <span className="text-[9px] font-medium uppercase tracking-wider text-[#6E6B7B]">
        {isAi ? "Stairpay assistant" : "Stairpay Homes"}
      </span>
    </div>
  );
}

function AiBadge() {
  return (
    <span className="inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-stairpay/12 text-stairpay">
      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 1.5l1.9 6.6 6.6 1.9-6.6 1.9-1.9 6.6-1.9-6.6-6.6-1.9 6.6-1.9z" />
      </svg>
    </span>
  );
}

function LandlordBadge() {
  return (
    <span className="inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#26045D]/12 text-[#26045D]">
      <svg
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </svg>
    </span>
  );
}

function ActionIcons() {
  return (
    <div className="flex items-center gap-2 pl-1 text-[#9994A3]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
        <line x1="3" y1="22" x2="3" y2="11" />
      </svg>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3z" />
        <line x1="21" y1="13" x2="21" y2="2" />
      </svg>
    </div>
  );
}
