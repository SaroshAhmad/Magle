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
  const role = typeof body.role === "string" ? body.role.trim() : "";
  const portfolio = typeof body.portfolio === "string" ? body.portfolio.trim() : "";
  const pitch = typeof body.pitch === "string" ? body.pitch.trim() : "";
  // Honeypot field — bots fill it, humans never see it.
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) {
    return NextResponse.json({ ok: true });
  }
  if (!name || !email || !role || !pitch) {
    return NextResponse.json(
      { error: "Please fill in your name, email, the role, and your pitch." },
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
    subject: `Application: ${role} — ${name}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Role: ${role}`,
      `Portfolio / LinkedIn / GitHub: ${portfolio || "—"}`,
      "",
      "Why them:",
      pitch,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
