import { NextResponse } from "next/server";

const secretKey = process.env.RECAPTCHA_SECRET_KEY;

interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

export async function POST(req: Request) {
  const data = await req.json(); // Recebe os dados enviados (token)

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${data.token}`,
  });

  const result: RecaptchaResponse = await res.json();

  return NextResponse.json({ success: result.success });
}
