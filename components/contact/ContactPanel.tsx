"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { useContactPanel } from "./ContactPanelContext";

const BOOK_A_CALL_HREF =
  process.env.NEXT_PUBLIC_BOOK_A_CALL_URL ??
  "https://meetings-eu1.hubspot.com/meetings/floris-ten-nijenhuis/contact-sales";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactPanel() {
  const ctx = useContactPanel();
  const isOpen = ctx?.isOpen ?? false;
  const close = ctx?.close;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Reset form state when the panel re-opens after a successful submission.
  // Render-body state-from-prop pattern; runs before commit so no extra render.
  // The <form> below unmounts on success and remounts when we go back to idle,
  // so its DOM inputs reset automatically.
  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen && status === "success") {
      setStatus("idle");
      setError(null);
    }
  }

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close?.();
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstFieldRef.current?.focus(), 250);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, close]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      email: String(data.get("businessEmail") ?? ""),
      role: String(data.get("jobTitle") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Request failed with ${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

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
        className={`absolute right-0 top-0 flex h-full w-full max-w-[640px] flex-col bg-paper shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-rule px-8 py-5">
          <button
            type="button"
            aria-label="Close"
            onClick={() => close?.()}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-panel hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
          <a
            href={BOOK_A_CALL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-body-sm font-medium text-ink underline-offset-4 hover:text-stairpay hover:underline"
          >
            Book a call
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
              <path d="M3 9 9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-8">
          <p className="text-eyebrow uppercase text-ink-muted">Contact sales</p>
          <h2 className="mt-3 text-heading-lg text-ink">Let&rsquo;s find a 30-minute slot.</h2>
          <p className="mt-3 text-body-md text-ink-muted">
            Tell us a bit about your team and we&rsquo;ll get back within one
            working day. Prefer to skip the form?{" "}
            <a
              href={BOOK_A_CALL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stairpay underline underline-offset-4 hover:text-ink"
            >
              Book a call directly
            </a>
            .
          </p>

          {status === "success" ? (
            <div className="mt-8 rounded-card border-hairline border-rule bg-paper-card p-6">
              <p className="text-eyebrow uppercase text-ink-muted">Got it</p>
              <p className="mt-3 text-heading-md text-ink">
                We&rsquo;ll be in touch within one working day.
              </p>
              <p className="mt-3 text-body-md text-ink-muted">
                A team member will reach out to find a slot. Want to skip the
                wait?{" "}
                <a
                  href={BOOK_A_CALL_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stairpay underline underline-offset-4 hover:text-ink"
                >
                  Pick a time
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <Field
                ref={firstFieldRef}
                label="Name"
                name="name"
                autoComplete="name"
                required
              />
              <Field
                label="Organisation"
                name="organisation"
                autoComplete="organization"
                required
              />
              <Field
                label="Business email"
                name="businessEmail"
                type="email"
                autoComplete="email"
                required
              />
              <Field
                label="Job title"
                name="jobTitle"
                autoComplete="organization-title"
              />
              <FieldArea label="Message" name="message" rows={4} />
              {error ? (
                <p className="text-body-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-stairpay px-6 py-3 text-body-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send"}
              </button>
              <p className="text-body-sm text-ink-light">
                We&rsquo;ll only use these details to get back to you about
                Stairpay.
              </p>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, name, type = "text", autoComplete, required },
  ref,
) {
  return (
    <label className="block">
      <span className="text-eyebrow uppercase text-ink-muted">
        {label}
        {required ? <span className="text-stairpay"> *</span> : null}
      </span>
      <input
        ref={ref}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 block w-full rounded-md border-hairline border-rule bg-paper px-3 py-2 text-body-md text-ink placeholder:text-ink-light focus:border-stairpay focus:outline-none focus:ring-2 focus:ring-stairpay/20"
      />
    </label>
  );
});

function FieldArea({
  label,
  name,
  rows,
}: {
  label: string;
  name: string;
  rows: number;
}) {
  return (
    <label className="block">
      <span className="text-eyebrow uppercase text-ink-muted">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="mt-2 block w-full rounded-md border-hairline border-rule bg-paper px-3 py-2 text-body-md text-ink placeholder:text-ink-light focus:border-stairpay focus:outline-none focus:ring-2 focus:ring-stairpay/20"
      />
    </label>
  );
}
