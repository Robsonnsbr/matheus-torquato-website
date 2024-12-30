import { load } from "recaptcha-v3";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export const validateRecaptcha = async (): Promise<boolean> => {
  try {
    const recaptcha = await load(siteKey);
    const token = await recaptcha.execute("submit");

    // Envia o token para a API de validação do reCAPTCHA
    const response = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }), // Envia o token para validação no back-end
    });

    // Verifica a resposta da API
    const data = await response.json();

    // Se a validação do reCAPTCHA for bem-sucedida, retorna true
    if (data.success) {
      return true;
    }
    // Se a validação falhar, retorna false
    return false;
  } catch (error) {
    // Caso ocorra algum erro, imprime no console e retorna false
    console.error("Erro ao validar o reCAPTCHA:", error);
    return false;
  }
};
