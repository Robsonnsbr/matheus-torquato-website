import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json(); // Lê o corpo JSON da requisição
    console.log(payload); // Exibe os dados no console

    // Retorna uma resposta JSON
    return NextResponse.json(
      { message: "Dados recebidos com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    // Caso ocorra algum erro, retorna uma resposta de erro
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao processar os dados" },
      { status: 500 }
    );
  }
}
