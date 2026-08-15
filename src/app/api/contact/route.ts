import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/notify";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const business = typeof body.business === "string" ? body.business.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  // Honeypot field — bots fill it, humans never see it.
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) {
    return NextResponse.json({ ok: true });
  }
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  await sendNotification({
    subject: `New enquiry from ${name}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || "—"}`,
      `Interested in: ${interest || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
