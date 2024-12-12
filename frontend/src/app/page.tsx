/* cSpell:disable */
import Main from "@/components/common/Main";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import TesteElemento from "./testeElemento";
import BannerHeader from "./bannerHeader";
import TestForm from "./form/form";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Main>
        <BannerHeader />
        <TesteElemento />
        {/* <hr className="bg-light w-full p-0.5" /> */}
        <div className="flex w-full h-full justify-start items-start bg-[#BDBDBD] pb-4 pl-4">
          <div className="flex w-5/6 m-auto">
            <TestForm />
            <div className="flex flex-col w-1/2 space-y-4 bg-light p-5 text-center m-5 font-serif rounded-md shadow-md">
              <span className="text-center text-xl font-bold">
                Instruções de Preenchimento
              </span>
              <p className="text-xl text-dark">
                Preencha os campos abaixo com as informações solicitadas. Caso
                precise adicionar mais variáveis, clique no botão
                &quot;Adicionar Variável&quot;. Para remover uma variável,
                clique no botão &quot;Remover&quot; ao lado dela. Após preencher
                o formulário, clique em &quot;Enviar&quot; para enviar seus
                dados.
              </p>
              <p className="text-xl text-dark mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique euismod est, ac dapibus erat congue sit amet. Nam vel
                lectus ac metus condimentum ullamcorper sed eu arcu. Aenean et
                est neque. Fusce nec magna ut nisi posuere gravida. Mauris
                ultricies interdum felis, sit amet tempor lorem bibendum in.
                Aliquam in est ac felis scelerisque ullamcorper sit amet eget
                metus.
              </p>
              <p className="text-xl text-dark mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique euismod est, ac dapibus erat congue sit amet. Nam vel
                lectus ac metus condimentum ullamcorper sed eu arcu. Aenean et
                est neque. Fusce nec magna ut nisi posuere gravida. Mauris
                ultricies interdum felis, sit amet tempor lorem bibendum in.
                Aliquam in est ac felis scelerisque ullamcorper sit amet eget
                metus.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full pl-5 justify-start items-start bg-white "></div>
      </Main>
      <Footer />
    </>
  );
}
