"use client";
import React, { useState } from "react";

interface FormData {
  nome: string;
  endereco: string;
  faculdade: string;
  curso: string;
  [key: string]: string; // Permite a adição de propriedades dinâmicas
}

const TestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    endereco: "",
    faculdade: "",
    curso: "",
  });

  const [numVariables, setNumVariables] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddVariable = () => {
    setNumVariables(numVariables + 1);
    setFormData({
      ...formData,
      [`variavel${numVariables + 1}`]: "",
    });
  };

  const handleRemoveVariable = () => {
    setNumVariables(numVariables - 1);
    setFormData((prevData) => ({
      ...prevData,
      [`variavel${numVariables}`]: "", // Remove a última variável
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do formulário:", formData);
    // Aqui você faria a requisição para o servidor com os dados do formulário
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full space-y-4 bg-mid-dark p-4 mb-3 font-serif rounded-md shadow-md"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="nome" className="text-sm font-medium text-white">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={formData.nome}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {/* ... outros campos (endereco, faculdade, curso) com a mesma estrutura ... */}

      <div className="flex flex-col space-y-2">
        <label htmlFor="variaveis" className="text-sm font-medium text-white">
          Variáveis
        </label>
        <div className="space-y-2">
          {Array.from({ length: numVariables }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                name={`variavel${index + 1}`}
                value={formData[`variavel${index + 1}`]}
                onChange={handleChange}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={handleRemoveVariable}
                >
                  Remover
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleAddVariable}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-dark hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Adicionar Variável
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-dark hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default TestForm;
