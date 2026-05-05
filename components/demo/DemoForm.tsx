"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());

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

  if (status === "success") {
    return (
      <div className="rounded-card border-hairline border-rule bg-paper-card p-8">
        <p className="text-eyebrow uppercase text-ink-muted">Got it</p>
        <p className="mt-4 text-heading-md text-ink">
          We&rsquo;ll be in touch within one working day.
        </p>
        <p className="mt-3 text-body-md text-ink-muted">
          A team member will reach out to find a 30-minute slot. If your
          inbox is brutal, you&rsquo;ll also get a calendar link.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border-hairline border-rule bg-paper-card p-8"
      noValidate
    >
      <div className="space-y-5">
        <Field
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="Housing Association"
          name="organisation"
          type="text"
          autoComplete="organization"
          required
        />
        <Field
          label="Role"
          name="role"
          type="text"
          autoComplete="organization-title"
        />
        <FieldArea
          label="What would you most like to see?"
          name="message"
          rows={4}
        />
      </div>
      {error ? (
        <p className="mt-4 text-body-sm text-stairpay" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-stairpay px-6 py-3 text-body-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request demo"}
      </button>
      <p className="mt-4 text-body-sm text-ink-light">
        We&rsquo;ll only use these details to arrange your demo.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, type, autoComplete, required }: FieldProps) {
  return (
    <label className="block">
      <span className="text-eyebrow uppercase text-ink-muted">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 block w-full rounded-md border-hairline border-rule bg-paper px-3 py-2 text-body-md text-ink placeholder:text-ink-light focus:border-stairpay focus:outline-none focus:ring-2 focus:ring-stairpay/20"
      />
    </label>
  );
}

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
