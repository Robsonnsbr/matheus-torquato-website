import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";
import twilio from "twilio";

// Obter as credenciais do Twilio e números de WhatsApp do arquivo .env
const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromPhone = process.env.TWILIO_WHATSAPP_NUMBER!;
const toPhone = process.env.MY_WHATSAPP_NUMBER!;

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const payload = req.body;
    console.log(payload);
    res.status(200);
  }
  try {
    // Extrair dados do corpo da requisição
    const emailData = await req.json();

    // Verificar se os dados necessários estão presentes
    if (!emailData.subject || !emailData.from || !emailData.to) {
      return NextResponse.json(
        { error: "Faltando dados obrigatórios no corpo da requisição." },
        { status: 400 }
      );
    }

    // Montar a mensagem para o WhatsApp
    const mensagemWhatsApp = `📧 Novo e-mail recebido!
    - Assunto: ${emailData.subject || "Sem assunto"}
    - De: ${emailData.from || "Desconhecido"}
    - Para: ${emailData.to || "Indefinido"}`;

    // Enviar a mensagem via Twilio
    const message = await client.messages.create({
      from: fromPhone, // Número do Twilio
      to: toPhone, // Seu número de WhatsApp
      body: mensagemWhatsApp, // Corpo da mensagem
    });

    console.log("Mensagem enviada com sucesso:", message.sid);

    // Responder com sucesso
    return NextResponse.json(
      { message: "Notificação enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json(
      { error: `Erro ao enviar notificação no WhatsApp: ${error}` },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "Olá, esta é uma resposta simples do GET!",
  });
}
