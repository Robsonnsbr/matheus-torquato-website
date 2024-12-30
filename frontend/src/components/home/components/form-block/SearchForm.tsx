// SearchForm.tsx
"use client";

import Image from "next/image";
import { logoIQNameblue } from "@public/logos";

import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { useSearchForm } from "@hooks/useSearchForm";
import TextArea from "./TextArea";
import Button from "./button";
import SubmittingOverlay from "./SubmittingOverlay";

export default function SearchForm() {
  const {
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
  } = useSearchForm();

  return (
    <>
      {/* TODO: Ajustar */}
      {/* //MOCKING */}
      {/* Overlay de bloqueio */}
      <SubmittingOverlay isSubmitting={isSubmitting} />
      {/* //MOCKING */}
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col font-medium gap-4 p-4 rounded-md w-full bg-background-form bg-contain m-2 shadow-md"
      >
        <Image
          alt="logo iq financials blue"
          src={logoIQNameblue}
          height={80}
          width={80}
          style={{ height: "auto", width: "auto" }}
          className="hidden sm:block absolute right-4 top-4"
        />

        <h3 className="w-full text-center font-semibold text-base sm:text-lg">
          FORMULÁRIO PARA PESQUISA DE DADOS
        </h3>

        <div className="flex flex-wrap gap-4 bg-cyan-700/20 p-3 rounded-md">
          <Label className="flex flex-col">
            Nome completo
            <Input
              id="nome-completo"
              name="nomeCompleto"
              type="text"
              value={formData.nomeCompleto}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Whatsapp / Email
            <Input
              id="whatsapp-email"
              name="whatsappEmail"
              type="text"
              value={formData.whatsappEmail}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Instituição
            <Input
              id="instituicao"
              name="instituicao"
              type="text"
              value={formData.instituicao}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Finalidade
            <Select
              id="finalidade"
              name="finalidade"
              options={sortedListPurpose}
              value={formData.finalidade}
              onChange={handleChange}
            />
          </Label>
        </div>

        <div className="flex flex-col gap-4">
          {formData.mainValues.map((variable, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between p-3 bg-white/20 rounded-md"
            >
              <Label className="flex flex-col">
                Nome da variável
                <Input
                  id="variavel"
                  name="variavel"
                  type="text"
                  value={variable.variavel}
                  onChange={(e) => handleChange(e, "mainValues", index)}
                />
              </Label>

              <div className="flex flex-col">
                <span className="text-center">Horizonte temporal</span>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Label className="flex flex-col">
                    <Input
                      id="data-inicio"
                      name="dataInicio"
                      type="date"
                      value={variable.dataInicio}
                      onChange={(e) => handleChange(e, "mainValues", index)}
                    />
                    Data base
                  </Label>
                  <Label className="flex flex-col">
                    <Input
                      type="date"
                      id="data-fim"
                      name="dataFim"
                      value={variable.dataFim}
                      onChange={(e) => handleChange(e, "mainValues", index)}
                    />
                    Data fim
                  </Label>
                  <Label className="flex flex-col">
                    <Select
                      id="frequencia"
                      name="frequencia"
                      options={listFrequency}
                      onChange={(e) => handleChange(e, "mainValues", index)}
                    />
                    Frequência
                  </Label>
                </div>
              </div>

              <Label className="flex flex-col">
                Região
                {variable.regioes.map((regiao, regionIndex) => (
                  <div key={regionIndex} className="flex mb-2 items-center">
                    <Select
                      id="regiao"
                      name="regiao"
                      value={regiao}
                      options={sortedListCountries}
                      onChange={(e) =>
                        handleChange(e, "mainValues", index, regionIndex)
                      }
                    />
                    <Button
                      type="button"
                      className="text-xs py-1 px-2 m-1"
                      onClick={() =>
                        handleRemoveRegion("mainValues", index, regionIndex)
                      }
                    >
                      Remover
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => handleAddRegion("mainValues", index)}
                >
                  Add região
                </Button>
              </Label>

              <Label className="flex flex-col">
                Obs: variável
                <TextArea
                  id="justificativa"
                  name="justificativa"
                  value={variable.justificativa}
                  onChange={(e) => handleChange(e, "mainValues", index)}
                />
              </Label>

              <Button
                type="button"
                className="self-end md:self-auto"
                onClick={() => handleRemoveVariable("mainValues", index)}
              >
                Remover
              </Button>
            </div>
          ))}
          <Button
            type="button"
            className="mt-2 w-fit self-start"
            onClick={() => handleAddVariable("mainValues")}
          >
            Adicionar variável principal
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {formData.secondaryValues.map((variable, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between p-3 bg-white/20 rounded-md"
            >
              <Label className="flex flex-col">
                Nome da variável
                <Input
                  id="variavel"
                  name="variavel"
                  type="text"
                  value={variable.variavel}
                  onChange={(e) => handleChange(e, "secondaryValues", index)}
                />
              </Label>

              <div className="flex flex-col">
                <span className="text-center">Horizonte temporal</span>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Label className="flex flex-col">
                    <Input
                      id="data-inicio"
                      name="dataInicio"
                      type="date"
                      value={variable.dataInicio}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Data base
                  </Label>
                  <Label className="flex flex-col">
                    <Input
                      type="date"
                      id="data-fim"
                      name="dataFim"
                      value={variable.dataFim}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Data fim
                  </Label>
                  <Label className="flex flex-col">
                    <Select
                      id="frequencia"
                      name="frequencia"
                      options={listFrequency}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Frequência
                  </Label>
                </div>
              </div>

              <Label className="flex flex-col">
                Região
                {variable.regioes.map((regiao, regionIndex) => (
                  <div key={regionIndex} className="flex mb-2 items-center">
                    <Select
                      id="regiao"
                      name="regiao"
                      value={regiao}
                      options={sortedListCountries}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index, regionIndex)
                      }
                    />
                    <Button
                      type="button"
                      className="text-xs py-1 px-2 m-1"
                      onClick={() =>
                        handleRemoveRegion(
                          "secondaryValues",
                          index,
                          regionIndex
                        )
                      }
                    >
                      Remover
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() => handleAddRegion("secondaryValues", index)}
                >
                  Add região
                </Button>
              </Label>

              <Label className="flex flex-col">
                Obs: variável
                <TextArea
                  id="justificativa"
                  name="justificativa"
                  value={variable.justificativa}
                  onChange={(e) => handleChange(e, "secondaryValues", index)}
                />
              </Label>

              <Button
                type="button"
                className="self-end md:self-auto"
                onClick={() => handleRemoveVariable("secondaryValues", index)}
              >
                Remover
              </Button>
            </div>
          ))}
          <Button
            type="button"
            className="mt-2 w-fit self-start"
            onClick={() => handleAddVariable("secondaryValues")}
          >
            Adicionar variável secundária
          </Button>
        </div>

        <Label className="flex flex-col">
          Observações gerais
          <TextArea
            id="obs-geral"
            name="obsGeral"
            value={formData.obsGeral}
            onChange={handleChange}
          />
        </Label>

        <div className="w-full flex flex-col sm:flex-row gap-2 justify-end mt-4">
          <Label className="flex items-center gap-2 text-red font-semibold bg-black/50 p-2 rounded-md cursor-pointer">
            URGENTE
            <Input
              required={false}
              type="checkbox"
              id="urgente"
              name="urgente"
              className="size-4"
              checked={formData.urgente}
              onChange={(e) => handleChange(e)}
            />
          </Label>

          <Button type="submit" className="py-2 px-4">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </>
  );
}
