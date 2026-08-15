/**
 * Sends form submissions by email via Resend when RESEND_API_KEY is set.
 * Without a key (local dev / not yet configured), submissions are logged
 * to the server console so nothing is silently lost.
 */
export async function sendNotification({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  const from = process.env.NOTIFY_FROM ?? "Magle Digital <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.log(`[notify] ${subject}\n${text}`);
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    console.error(`[notify] Resend error ${res.status}: ${await res.text()}`);
    return { delivered: false };
  }
  return { delivered: true };
}
