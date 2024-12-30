import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json(); // Lê o corpo JSON da requisição
    console.log(payload); // Exibe o payload no console

    return NextResponse.json(
      { message: "Requisição POST recebida com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
}
