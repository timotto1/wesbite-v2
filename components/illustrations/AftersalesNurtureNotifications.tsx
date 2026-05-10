type Notification = {
  client: "gmail" | "outlook";
  timestamp: string;
  subject: string;
  preview: string;
};

const NOTIFICATIONS: Notification[] = [
  {
    client: "gmail",
    timestamp: "now",
    subject: "Your home is worth more than you think",
    preview:
      "Based on recent sales nearby, your share has grown in value. Take a look →",
  },
  {
    client: "outlook",
    timestamp: "2m ago",
    subject: "Here's where you stand on your home this year",
    preview:
      "Your 2026 annual statement is ready. See your equity, payments, and progress.",
  },
  {
    client: "gmail",
    timestamp: "1h ago",
    subject: "Ready to own a bigger share of your home?",
    preview:
      "You've been in your home 3 years. Many residents staircase around now.",
  },
  {
    client: "outlook",
    timestamp: "yesterday",
    subject: "A quick update on your equity — and what's next",
    preview:
      "Your share is now worth more than when you bought. Here's what you can do.",
  },
];

export function AftersalesNurtureNotifications() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/resident/resident-portal-background.png')",
      }}
    >
      <div className="relative flex h-full w-full items-center justify-center p-5 md:p-7">
        <div className="flex w-full max-w-[420px] flex-col gap-2.5">
          {NOTIFICATIONS.map((n, i) => (
            <NotificationCard key={i} {...n} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NotificationCard({
  client,
  timestamp,
  subject,
  preview,
}: Notification) {
  return (
    <div
      className="rounded-[20px] bg-white px-5 py-3"
      style={{
        boxShadow:
          "0 1px 2px rgba(38, 4, 93, 0.04), 0 12px 32px -8px rgba(38, 4, 93, 0.14)",
      }}
    >
      <div className="flex items-center gap-3">
        <ClientIcon client={client} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[12px] font-medium text-ink">Stairpay</span>
            <span className="text-[11px] font-normal text-ink-light">
              {timestamp}
            </span>
          </div>
          <p className="mt-0.5 truncate text-[13px] font-semibold text-ink">
            {subject}
          </p>
          <p className="truncate text-[12px] font-normal leading-snug text-ink-light">
            {preview}
          </p>
        </div>
      </div>
    </div>
  );
}

function ClientIcon({ client }: { client: Notification["client"] }) {
  const src =
    client === "gmail" ? "/images/logos/gmail.png" : "/images/logos/outlook.png";
  return (
    <span
      aria-hidden
      className="flex h-9 w-9 flex-none items-center justify-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        className="h-full w-full object-contain"
      />
    </span>
  );
}
