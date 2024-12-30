import { Resend } from "resend";

type SendEmailRequest = {
  content: string;
  subject: string;
};

const resend = new Resend(process.env.SECRET_EMAIL_API_KEY);

export async function POST(req: Request) {
  try {
    const { content, subject }: SendEmailRequest = await req.json();

    // Envia o email com HTML renderizado
    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME || "IQ Financials Web"} <${
        process.env.EMAIL_FROM_EMAIL || "onboarding@resend.dev"
      }>`,
      to: ["financialsiq@gmail.com"],
      subject: subject,
      html: content,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}
