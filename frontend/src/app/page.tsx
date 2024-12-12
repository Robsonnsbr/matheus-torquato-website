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
        <div className="flex w-full h-[700px] justify-start items-start bg-white pb-4 pl-4">
          <TestForm />
        </div>
        <div className="flex w-full h-full pl-5 justify-start items-start bg-white "></div>
      </Main>
      <Footer />
    </>
  );
}
