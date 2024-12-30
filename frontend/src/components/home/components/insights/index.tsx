import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";

export default function Insights() {
  return (
    <ContentContainer className="py-12 text-white flex flex-col">
      <SvgLine />
      <div className="flex flex-col sm:flex-row marker:text-red">
        <h2 className="uppercase self-center font-poppins font-extrabold text-3xl pb-8 text-center text-blue">
          Insights Estratégicos e Personalizados
        </h2>
        <div className="flex flex-wrap justify-between m-auto overflow-hidden">
          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
              <h2 className="text-xl font-semibold mb-6">
                Público de Interesse
              </h2>
              <ul className="text-left mt-4 ml-4 list-disc">
                <li className="mb-4">Acadêmicos</li>
                <li className="mb-4">
                  Professores de Finanças, Contabilidade, Economia e outras
                  áreas de interesse
                </li>
                <li className="mb-4">Gestores de Ativos</li>
                <li className="mb-4">Empresas</li>
                <li className="mb-4">Consultorias e Auditorias</li>
                <li className="mb-4">Investidores</li>
              </ul>
            </div>
          </div>

          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
              <h2 className="text-xl font-semibold mb-6">Facilidades</h2>
              <ul className="text-left mt-4 ml-4 list-disc">
                <li className="mb-4">Dados em formato Excel, DTA, Python</li>
                <li className="mb-4">Coleta de dados em até 48h</li>
                <li className="mb-4">
                  Dados prontos para análises em painel: long Empresa/Ano com as
                  variáveis necessárias
                </li>
                <li className="mb-4">
                  Organização personalizada: por setor, país, tamanho ou outros
                  comparativos
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full sm:w-1/3 p-4">
            <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
              <h2 className="text-xl font-semibold mb-6">Confiabilidade</h2>
              <ul className="text-left mt-4 ml-4 list-disc">
                <li className="mb-4">
                  Dados atualizados e verificáveis das mais diversas empresas
                </li>
                <li className="mb-4">
                  Integração com as respectivas Demonstrações Financeiras
                  (podendo espelhar como é coletado e calculado tais
                  informações)
                </li>
                <li className="mb-4">
                  Base integrada da Thompson Reuters, Capital IQ e
                  Standard&amp;Poors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
