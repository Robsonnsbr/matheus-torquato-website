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
      <BannerHeader />
      <Main>
        <TesteElemento />
        <hr className="bg-mid-dark w-full p-0.5" />
        <div className="flex w-full h-96 justify-start items-start bg-light">
          TESTE
        </div>
        <div className="flex w-full h-full pl-5 justify-start items-start bg-mid-dark">
          <TestForm />
        </div>
      </Main>
      <Footer />
    </>
  );
}
