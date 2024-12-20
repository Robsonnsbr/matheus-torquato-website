/* cSpell:disable */

import AppContainer from "@components/common/container/AppContainer";
// import Header from "@components/header";
import HeroSection from "@components/sections/HeroSection";
import Main from "@components/common/Main";
import Section from "../components/common/Section";
import Footer from "@components/footer";
import InfoSection from "@components/sections/InfoSection";
import GuideSection from "@components/sections/GuideSection";
import TestForm from "./form/form";
import Container from "@components/common/container/Container";
// import TestForm from "./form/form";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />

      <Main>
        <InfoSection />
        <GuideSection />
        <Section className="!bg-mid-dark">
          <Container>
            <div className="flex flex-col w-full justify-center items-center">
              <h1 className="text-white">FORM</h1>
              <TestForm />
            </div>
          </Container>
        </Section>
        <Section>
          <span className="w-full text-3xl text-center font-extrabold">
            SECTION3
          </span>
        </Section>
      </Main>
      <Footer />
    </AppContainer>
  );
}

//TODO: AJUSTAR TODO padding da section, talvez seja necessário cria um container dentro, padding left e right.
//TODO: as cores estão com conflito no tailwind, analisar, comportamento: aplica e desaplica sozinha.(talvez seja a apenas sobrepor com !important)
//TODO: ajustar size do layout para resoluções maiores.
