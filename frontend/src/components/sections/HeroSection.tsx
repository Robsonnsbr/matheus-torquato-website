import Section from "@components/common/Section";
import SvgLogoComponent from "@components/svg/SvgLogoComponent";
import TickerPartners from "@components/home/TickerPartners";
import Container from "@components/common/container/Container";

export default function HeroSection() {
  return (
    <Section
      id="hero-section"
      className="flex flex-col bg-fixed bg-parallax-hero-section2 bg-cover bg-left-top"
    >
      <Container className="h-full">
        <div className="flex flex-col space-y-8 xl:w-4/6 text-white font-poppins text-left text-balance my-auto">
          <h1 className="font-extrabold leading-none uppercase">
            <span className="font-raleway flex sm:text-red items-center">
              M<span className="sr-only">A</span>
              <SvgLogoComponent aria-hidden="true" width={50} height={40} />
              GISDATA
            </span>
            <span className="text-3xl border-t-4 border-warning">
              Dados Financeiros e Contábeis de Qualidade
            </span>
          </h1>
          <h2 className="text-2xl font-bold leading-snug">
            Precisa de informações financeiras confiáveis para suas análises?
          </h2>
          <p className="text-xl mt-4 leading-relaxed">
            Oferecemos <span className="font-bold">dados econômicos</span> e{" "}
            <span className="font-bold">financeiros</span> de empresas de{" "}
            <span className="font-bold">capital aberto</span> e{" "}
            <span className="font-bold">capital fechado</span>, com foco em
            precisão e confiabilidade.
          </p>

          {/* Fonte dos Dados */}
          <p className="text-lg mt-4 leading-relaxed">
            Nossos relatórios são baseados em dados da{" "}
            <span className="font-bold text-2xl text-warning border-t-4 border-white">
              Standard & Poor&apos;s
            </span>
            , garantindo qualidade e informações auditáveis para decisões
            estratégicas.
          </p>

          {/* Benefícios em Lista */}
          <ul className="list-disc list-inside marker:text-warning mt-4 text-lg leading-relaxed">
            <li>
              Relatórios detalhados de empresas nacionais e internacionais.
            </li>
            <li>
              Dados atualizados de empresas de pequeno, médio e grande porte.
            </li>
            <li>Análises confiáveis para embasar decisões econômicas.</li>
          </ul>
        </div>
      </Container>

      <div id="ticker-wrapper-hero-section" className="w-full h-fit mt-auto">
        <TickerPartners />
      </div>
    </Section>
  );
}
