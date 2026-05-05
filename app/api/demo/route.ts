import { NextResponse } from "next/server";

type DemoPayload = {
  name?: string;
  email?: string;
  organisation?: string;
  role?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: DemoPayload = {};
  try {
    body = (await req.json()) as DemoPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["name", "email", "organisation"] as const;
  for (const key of required) {
    if (!body[key] || typeof body[key] !== "string") {
      return NextResponse.json(
        { error: `Missing field: ${key}` },
        { status: 400 }
      );
    }
  }

  const webhook = process.env.STAIRPAY_DEMO_WEBHOOK;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...body,
          source: "stairpay.com /demo",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: `Webhook responded ${res.status}` },
          { status: 502 }
        );
      }
    } catch (err) {
      return NextResponse.json(
        { error: "Webhook delivery failed" },
        { status: 502 }
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    console.info("[demo form] no STAIRPAY_DEMO_WEBHOOK set — payload:", body);
  }

  return NextResponse.json({ ok: true });
}
