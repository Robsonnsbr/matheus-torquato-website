export type Section = "mainValues" | "secondaryValues";

export type Variavel = {
  variavel: string;
  dataInicio: string;
  dataFim: string;
  regioes: string[];
  justificativa: string;
  frequencia: string;
};

export type FormData = {
  nomeCompleto: string;
  whatsappEmail: string;
  instituicao: string;
  finalidade: string;
  dataType: string;
  customDataType: string;
  obsGeral: string;
  urgente: boolean;
  mainValues: Variavel[];
  secondaryValues: Variavel[];
};

export const listCountries = [
  "Alemanha",
  "Argentina",
  "Arábia Saudita",
  "Austrália",
  "Brasil",
  "Canadá",
  "China",
  "Coreia do Sul",
  "Espanha",
  "Estados Unidos",
  "França",
  "Holanda",
  "Índia",
  "Indonésia",
  "Itália",
  "Japão",
  "México",
  "Polônia",
  "Reino Unido",
  "Rússia",
  "Suíça",
  "Turquia",
  "Vietnã",
];

export const listPurpose = [
  "Acadêmico",
  "Consultoria",
  "Investimentos",
  "Gestão Financeira",
];
export const listDataType = ["Excel", "DTA", "PYTHON", "Outros"];

export const listFrequency = [
  "Diário",
  "Semanal",
  "Mensal",
  "Trimestral",
  "Semestral",
  "Anual",
];
