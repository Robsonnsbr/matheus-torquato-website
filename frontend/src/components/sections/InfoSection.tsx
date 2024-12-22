import Container from "@components/common/container/Container";
import Section from "@components/common/Section";

export default function InfoSection() {
  return (
    <Section
      id="info-section"
      className="flex-col justify-between bg-[var(--color-blue)]"
    >
      <Container className="flex flex-col py-12">
        <h2 className="uppercase self-center text-red font-poppins font-extrabold text-3xl pb-8 text-center">
          Relatórios Personalizados para Estratégias de Sucesso
        </h2>
        <div className="flex flex-wrap justify-between m-auto overflow-hidden">
          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-white shadow-lg w-full border-octagonal">
              <h2 className="text-xl font-semibold mb-4">
                Relatórios Financeiros Sob Medida para Decisões Estratégicas
              </h2>
              <p className="text-lg text-black">
                A <strong>MAGISDATA</strong> entrega relatórios personalizados
                com dados financeiros e contábeis de empresas nacionais e
                internacionais. Seja para{" "}
                <strong>
                  planejamento estratégico, análise de investimentos{" "}
                </strong>
                ou <strong>benchmarking</strong>, nossos relatórios detalhados
                fornecem:
              </p>
              <ul className="text-left text-black mt-4 ml-4 list-disc">
                <li>
                  Análises completas de balanços patrimoniais e demonstrativos
                  de resultados.
                </li>
                <li>
                  Comparativos de desempenho entre empresas do mesmo setor.
                </li>
                <li>
                  Dados atualizados de empresas de pequeno, médio e grande
                  porte.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-white border-octagonal shadow-lg w-full">
              <h2 className="text-xl font-semibold mb-4">
                Dados Econômicos Auditáveis com Qualidade Standard & Poor&apos;s
              </h2>
              <p className="text-lg text-black">
                A confiabilidade dos dados é o que diferencia decisões comuns de
                decisões estratégicas. Na <strong>MAGISDATA</strong>,
                trabalhamos com informações auditáveis e validadas, provenientes
                de fontes reconhecidas, como a{" "}
                <strong>Standard & Poor&apos;s</strong>, garantindo:
              </p>
              <ul className="text-left text-black mt-4 ml-4 list-disc">
                <li>
                  Relatórios com informações financeiras consistentes e
                  auditadas.
                </li>
                <li>
                  Transparência total para análises contábeis e projeções
                  econômicas.
                </li>
                <li>
                  Dados históricos e atualizados de empresas de capital aberto e
                  fechado.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-white border-octagonal shadow-lg w-full">
              <h2 className="text-xl font-semibold mb-4">
                Informações Financeiras Precisas para um Mercado Competitivo
              </h2>
              <p className="text-lg text-black">
                No mundo corporativo, dados precisos são fundamentais para
                garantir o <strong>crescimento e a inovação</strong> de
                negócios. A <strong>MAGISDATA</strong> oferece informações
                econômicas e financeiras atualizadas que auxiliam na:
              </p>
              <ul className="text-left text-black mt-4 ml-4 list-disc">
                <li>
                  Identificação de tendências de mercado e desempenho setorial.
                </li>
                <li>Análises comparativas e projeções estratégicas.</li>
                <li>
                  Tomada de decisões assertivas com base em dados confiáveis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
