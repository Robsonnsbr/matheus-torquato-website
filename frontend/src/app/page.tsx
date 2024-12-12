import Main from "@/components/common/Main";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import TesteElemento from "./testeElemento";
import BannerHeader from "./bannerHeader";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <BannerHeader />
      <Main>
        <TesteElemento />
      </Main>
      <Footer />
    </>
  );
}
