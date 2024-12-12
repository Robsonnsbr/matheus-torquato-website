import React from "react";

export default function BannerHeader() {
  return (
    <div className="h-2/5  bg-fixed bg-banner-parallax-header  bg-right bg-cover bg-red">
      <div className="text-accent  font-serif text-xl text-balance flex flex-col space-y-4 pl-2 pt-2 sm:pl-10 sm:pt-10 sm:w-4/6 ">
        <h1>
          Sua pesquisa no
          <span className="text-2xl font-bold sm:text-red pl-1">MAGISDATA</span>
          .
          <br />
          Oferecemos um serviço especializado de coleta e organização de dados
          para mestrandos em áreas como finanças, contabilidade e administração.
          Nosso sistema acessa bancos de dados acadêmicos e corporativos,
          garantindo informações precisas e atualizadas para suas pesquisas.
        </h1>
        <h1>
          Impulsione sua pesquisa com dados confiáveis. Nossa plataforma oferece
          um vasto banco de dados para mestrandos em áreas como finanças,
          contabilidade e administração. Coletamos e organizamos informações de
          diversas fontes, facilitando a análise de dados e a identificação de
          tendências de mercado.
        </h1>
        <h1>
          Com nossa ferramenta, você pode filtrar e cruzar dados de forma rápida
          e eficiente, gerando insights valiosos para seus estudos. Nossos
          algoritmos avançados identificam padrões e correlações, auxiliando na
          construção de modelos e na tomada de decisões.
        </h1>
      </div>
    </div>
  );
}
