import * as React from "react";
import { FormData, Variavel } from "src/types/formType";

type EmailTemplateProps = {
  formData: FormData;
};

export const EmailTemplate = ({ formData }: Readonly<EmailTemplateProps>) => {
  const {
    nomeCompleto,
    whatsappEmail,
    instituicao,
    finalidade,
    obsGeral,
    urgente,
    mainValues,
    secondaryValues,
  } = formData;

  const renderVariaveis = (variaveis: Variavel[]) => {
    return (
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">Variável</th>
            <th className="border px-4 py-2 text-center">Data de Início</th>
            <th className="border px-4 py-2 text-center">Data de Fim</th>
            <th className="border px-4 py-2 text-center">Regiões</th>
            <th className="border px-4 py-2 text-center">Justificativa</th>
            <th className="border px-4 py-2 text-center">Frequência</th>
          </tr>
        </thead>
        <tbody>
          {variaveis.map((variavel, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{variavel.variavel}</td>
              <td className="border px-4 py-2">{variavel.dataInicio}</td>
              <td className="border px-4 py-2">{variavel.dataFim}</td>
              <td className="border px-4 py-2">
                {variavel.regioes.join(", ")}
              </td>
              <td className="border px-4 py-2">{variavel.justificativa}</td>
              <td className="border px-4 py-2">{variavel.frequencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Informações do Formulário</h1>
      <table className="w-full border-collapse mb-6">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Nome Completo:</td>
            <td className="border px-4 py-2">{nomeCompleto}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">WhatsApp/Email:</td>
            <td className="border px-4 py-2">{whatsappEmail}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Instituição:</td>
            <td className="border px-4 py-2">{instituicao}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Finalidade:</td>
            <td className="border px-4 py-2">{finalidade}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">
              Observações Gerais:
            </td>
            <td className="border px-4 py-2">{obsGeral}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Urgente:</td>
            <td className="border px-4 py-2">{urgente ? "Sim" : "Não"}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-4">Principais Variáveis</h2>
      {renderVariaveis(mainValues)}

      <h2 className="text-xl font-semibold mb-4">Variáveis Secundárias</h2>
      {renderVariaveis(secondaryValues)}
    </div>
  );
};
