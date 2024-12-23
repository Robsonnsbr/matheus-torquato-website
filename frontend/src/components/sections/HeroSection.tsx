"use client";
import Section from "@components/common/Section";
import Image from "next/image";
import logoIqfinancialsLarge from "@public/images/logo_name_iqfinancials_large.png";
import Container from "@components/common/container/Container";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <Section
      id="hero-section"
      className="flex flex-col bg-fixed bg-parallax-background_12 bg-cover bg-right-bottom"
    >
      <Container className="h-full flex flex-col">
        {/* Cabeçalho centralizado */}
        <div className="flex flex-col space-y-8 text-white font-poppins !text-center text-balance m-auto">
          <h1 className="font-extrabold leading-none uppercase">
            <span className="font-raleway flex items-center justify-center">
              <span className="sr-only">iq financials</span>
              {/* <SvgLogoComponent aria-hidden="true" width={50} height={40} /> */}
              <Image
                alt="logo iq financials"
                src={logoIqfinancialsLarge}
                height={100}
                width={500}
                className="sm:pt-20"
              />
            </span>
            <span className="text-3xl border-t-4 border-red">
              Dados Econômicos, Financeiros e Contábeis
            </span>
          </h1>
          <h2 className="text-2xl font-bold leading-snug">
            Precisa de ajuda para coletar seus dados econômico-financeiros?
          </h2>
        </div>

        {/* Conteúdo com flex-wrap e alinhamento central */}
        <div className="flex flex-wrap gap-6 justify-center items-center text-lg text-white leading-relaxed text-justify py-10">
          {/* Coluna 1 */}
          <ul className="list-none flex-1 min-w-[300px] max-w-[500px]">
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Dados financeiros de mais de 200 mil empresas públicas e privadas,
              incluindo balanços patrimoniais, demonstrações de resultados,
              fluxo de caixa e indicadores financeiros.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Informações de mais de 70 mil transações distribuídas em mais de
              150 países.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Informações de setor e indústria.
            </li>
          </ul>

          {/* Coluna 2 */}
          <ul className="list-none flex-1 min-w-[300px] max-w-[500px]">
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Análises de empresas comparáveis e projeções financeiras.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Dados de mercados financeiros globais, incluindo títulos de
              dívidas, commodities e derivativos.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Integração para Excel, Stata, Python e outros softwares
              necessários para análises.
            </li>
            <li className="flex items-start gap-2">
              <IoMdArrowRoundForward
                className="text-red"
                style={{ fontSize: "24px", minWidth: "24px" }}
              />
              Informações para diversas necessidades, como estudos
              econométricos, cálculo de taxa de desconto, análise de múltiplos,
              projeções de setor e avaliação de empresas.
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
