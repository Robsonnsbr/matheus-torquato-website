"use client";
import ContentContainer from "@components/common/containers/ContentContainer";

import Image from "next/image";
import { logoIQWithName } from "@public/logos/index";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Hero() {
  return (
    <ContentContainer className="h-full flex flex-col">
      <div className="flex flex-col space-y-8 text-white font-poppins !text-center text-balance m-auto">
        <h1 className="font-extrabold leading-none uppercase">
          <span className="font-raleway flex items-center justify-center">
            <span className="sr-only">iq financials</span>
            <Image
              alt="logo iq financials"
              src={logoIQWithName}
              height={100}
              width={500}
              style={{ height: "auto", width: "auto" }}
              className="sm:pt-20"
            />
          </span>
          <span className="text-3xl border-t-2 border-red">
            Dados Econômicos, Financeiros e Contábeis
          </span>
        </h1>
        <h2 className="text-2xl font-bold leading-snug">
          Precisa de ajuda para coletar seus dados econômico-financeiros?
        </h2>
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-start text-lg text-white leading-relaxed text-justify py-10">
        <IconContext.Provider
          value={{ className: "mt-2 text-red text-xl min-w-6 h-6" }}
        >
          <ul className="list-none flex-1 min-w-[300px] max-w-[500px] text-xl w-6 space-y-4">
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Dados financeiros de mais de 200 mil empresas públicas e privadas,
              incluindo balanços patrimoniais, demonstrações de resultados,
              fluxo de caixa e indicadores financeiros.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Informações de mais de 70 mil transações distribuídas em mais de
              150 países.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Informações de setor e indústria.
            </li>
          </ul>

          <ul className="list-none flex-1 min-w-[300px] max-w-[500px] space-y-4">
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Análises de empresas comparáveis e projeções financeiras.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Dados de mercados financeiros globais, incluindo títulos de
              dívidas, commodities e derivativos.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Integração para Excel, Stata, Python e outros softwares
              necessários para análises.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward />
              Informações para diversas necessidades, como estudos
              econométricos, cálculo de taxa de desconto, análise de múltiplos,
              projeções de setor e avaliação de empresas.
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </ContentContainer>
  );
}
