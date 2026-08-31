import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { email?: string; name?: string };
    const email = body.email?.trim();
    const name = body.name?.trim() || "Founder";

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: email,
      subject: "Welcome to Vaxion",
      html: `
        <div style="background:#070a12;color:#f5f7f4;font-family:Arial,sans-serif;padding:40px 24px">
          <div style="max-width:560px;margin:0 auto">
            <p style="color:#63f5d5;letter-spacing:.16em;font-size:12px">VAXION / 001</p>
            <h1 style="font-size:34px;font-weight:600;margin:30px 0 12px">Welcome, ${escapeHtml(name)}.</h1>
            <p style="color:#a5b1c5;font-size:16px;line-height:1.65">Your founder workspace is taking shape. We’ll keep you close to the signal as the next layer comes online.</p>
            <p style="color:#63f5d5;font-size:14px;margin-top:32px">Keep building forward.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json({ sent: true });
  } catch {
    return NextResponse.json({ error: "Unable to send welcome email." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });
}
