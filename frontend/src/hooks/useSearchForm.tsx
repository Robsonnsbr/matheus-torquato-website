// import { EmailTemplate } from "@components/email-templates/EmailTemplate";
import { validateRecaptcha } from "@components/home/components/form-block/validateRecaptcha";
import { useState, useMemo } from "react";
// import ReactDOMServer from "react-dom/server"; // Para renderizar JSX para HTML

import {
  FormData,
  Section,
  listCountries,
  listPurpose,
  listFrequency,
} from "src/types/formType";

export function useSearchForm() {
  // Memorizar listas ordenadas para evitar reprocessamento em cada renderização
  const sortedListCountries = useMemo(
    () => Array.from(new Set(listCountries)).sort((a, b) => a.localeCompare(b)),
    []
  );

  const sortedListPurpose = useMemo(
    () => [...listPurpose].sort((a, b) => a.localeCompare(b)),
    []
  );

  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    obsGeral: "",
    whatsappEmail: "",
    instituicao: "",
    finalidade: "",
    urgente: false,
    mainValues: [
      {
        variavel: "",
        dataInicio: "",
        dataFim: "",
        regioes: [""],
        justificativa: "",
        frequencia: "",
      },
    ],
    secondaryValues: [
      {
        variavel: "",
        dataInicio: "",
        dataFim: "",
        regioes: [""],
        justificativa: "",
        frequencia: "",
      },
    ],
  });
  //MOCKING
  const [isSubmitting, setIsSubmitting] = useState(false);
  //MOCKING
  // Atualização dinâmica do estado com base na seção e no índice
  const updateSection = (
    section: Section,
    index: number,
    updatedItem: Partial<(typeof formData)[Section][number]>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item, idx) =>
        idx === index ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section?: Section,
    index?: number,
    regionIndex?: number
  ) => {
    const { name, value, type } = event.target;
    const isCheckbox =
      event.target instanceof HTMLInputElement && type === "checkbox";

    setFormData((prevData) => {
      if (section && index !== undefined) {
        if (name === "regiao" && regionIndex !== undefined) {
          return {
            ...prevData,
            [section]: prevData[section].map((item, idx) =>
              idx === index
                ? {
                    ...item,
                    regioes: item.regioes.map((regiao, rIdx) =>
                      rIdx === regionIndex ? value : regiao
                    ),
                  }
                : item
            ),
          };
        }

        return {
          ...prevData,
          [section]: prevData[section].map((item, idx) =>
            idx === index
              ? {
                  ...item,
                  [name]: isCheckbox
                    ? (event.target as HTMLInputElement).checked
                    : value,
                }
              : item
          ),
        };
      }

      return {
        ...prevData,
        [name]: isCheckbox ? (event.target as HTMLInputElement).checked : value,
      };
    });
  };

  const handleAddVariable = (section: Section) => {
    const newVariable = {
      variavel: "",
      dataInicio: "",
      dataFim: "",
      regioes: [""],
      justificativa: "",
      frequencia: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], newVariable],
    }));
  };

  const handleAddRegion = (section: Section, index: number) => {
    updateSection(section, index, {
      regioes: [...formData[section][index].regioes, ""],
    });
  };

  const handleRemoveRegion = (
    section: Section,
    index: number,
    regionIndex: number
  ) => {
    updateSection(section, index, {
      regioes: formData[section][index].regioes.filter(
        (_, rIdx) => rIdx !== regionIndex
      ),
    });
  };

  const handleRemoveVariable = (section: Section, index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, idx) => idx !== index),
    }));
  };

  const resetFormData = () => {
    setFormData({
      nomeCompleto: "",
      obsGeral: "",
      whatsappEmail: "",
      instituicao: "",
      finalidade: "",
      urgente: false,
      mainValues: [
        {
          variavel: "",
          dataInicio: "",
          dataFim: "",
          regioes: [""],
          justificativa: "",
          frequencia: "",
        },
      ],
      secondaryValues: [
        {
          variavel: "",
          dataInicio: "",
          dataFim: "",
          regioes: [""],
          justificativa: "",
          frequencia: "",
        },
      ],
    });
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Renderiza o JSX para HTML
  //     const emailContent = ReactDOMServer.renderToStaticMarkup(
  //       <EmailTemplate formData={formData} />
  //     );

  //     // Envia os dados para a API com HTML gerado
  //     const res = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         content: emailContent, // Envia o HTML gerado, não o JSX
  //         subject: "Pesquisa", // Assunto do email
  //       }),
  //     });

  //     if (res.ok) {
  //       alert("Email enviado com sucesso!");
  //     } else {
  //       alert("Falha ao enviar o email");
  //     }

  //     resetFormData();
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error(error.message);
  //     } else {
  //       console.error("Erro desconhecido", error);
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Indica que o envio começou

    try {
      // Valida o reCAPTCHA antes de prosseguir
      const isValid = await validateRecaptcha();
      if (!isValid) {
        alert("Falha na validação do reCAPTCHA. Tente novamente.");
        return; // Se o reCAPTCHA falhar, interrompe o envio
      }

      // Simula um atraso de 3 segundos para mock do envio de email
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Mock de resposta simulada (altere para 'ok: false' para simular falha)
      const mockResponse = { ok: true };

      // Simula a resposta da API com o mock
      if (mockResponse.ok) {
        alert("Simulação: Email enviado com sucesso!!!");
      } else {
        alert("Simulação: Falha ao enviar o email");
      }

      resetFormData(); // Reseta os dados do formulário
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro ao enviar o formulário:", error.message);
      } else {
        console.error("Erro desconhecido:", error);
      }
    } finally {
      setIsSubmitting(false); // Finaliza o processo de envio
    }
  };

  return {
    formData,
    sortedListCountries,
    sortedListPurpose,
    listFrequency,
    isSubmitting,
    handleChange,
    handleAddVariable,
    handleAddRegion,
    handleRemoveRegion,
    handleRemoveVariable,
    handleSubmit,
  };
}
