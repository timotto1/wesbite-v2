"use client";

import { useEffect } from "react";
import { useContactPanel } from "./ContactPanelContext";

const BOOK_A_CALL_HREF =
  process.env.NEXT_PUBLIC_BOOK_A_CALL_URL ??
  "https://meetings-eu1.hubspot.com/meetings/floris-ten-nijenhuis/contact-sales";

const EMAIL_HREF =
  "mailto:hello@stairpay.com?subject=Stairpay%20-%20Contact%20sales";

export function ContactPanel() {
  const ctx = useContactPanel();
  const isOpen = ctx?.isOpen ?? false;
  const close = ctx?.close;

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close?.();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact sales"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] ${isOpen ? "" : "pointer-events-none"}`}
    >
      <button
        type="button"
        aria-label="Close contact panel"
        onClick={() => close?.()}
        tabIndex={isOpen ? 0 : -1}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-paper shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-end border-b border-rule px-8 py-5">
          <button
            type="button"
            aria-label="Close"
            onClick={() => close?.()}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-panel hover:text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
        </header>

        <div className="flex flex-1 flex-col px-8 py-10">
          <p className="text-eyebrow uppercase text-ink-muted">Contact sales</p>
          <h2 className="mt-3 text-heading-lg text-ink">
            Let&rsquo;s talk Shared Ownership.
          </h2>
          <p className="mt-3 text-body-md text-ink-muted">
            Pick a 30-minute slot, or drop us an email and we&rsquo;ll come back
            to you within one working day.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={BOOK_A_CALL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-[8px] bg-stairpay px-5 py-4 text-body-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              <span className="flex items-center gap-3">
                <CalendarIcon />
                Book a call
              </span>
              <ArrowIcon />
            </a>
            <a
              href={EMAIL_HREF}
              className="group inline-flex items-center justify-between gap-3 rounded-[8px] border-hairline border-rule bg-paper-card px-5 py-4 text-body-sm font-medium text-ink transition-colors hover:bg-paper-panel"
            >
              <span className="flex items-center gap-3">
                <MailIcon />
                Email us
              </span>
              <ArrowIcon />
            </a>
          </div>

          <p className="mt-6 text-body-sm text-ink-light">
            hello@stairpay.com — we read everything that lands here.
          </p>
        </div>
      </aside>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 8 12 14 21 8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <line x1="3" y1="7" x2="11" y2="7" />
      <polyline points="7 3 11 7 7 11" />
    </svg>
  );
}
