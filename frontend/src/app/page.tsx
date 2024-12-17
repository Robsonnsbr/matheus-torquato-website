/* cSpell:disable */

import AppContainer from "@components/common/container/AppContainer";
// import Header from "@components/header";
import HeroSection from "@components/sections/HeroSection";
import Main from "@components/common/Main";
import Section from "../components/common/Section";
import Footer from "@components/footer";
import InfoSection from "@components/sections/InfoSection";
import GuideSection from "@components/sections/GuideSection";
// import TestForm from "./form/form";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />

      <Main>
        <InfoSection />
        <GuideSection />
        <Section>
          <span className="w-full text-3xl text-center font-extrabold">
            SECTION2
          </span>
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

//TODO: AJUSTAR TODO padding da section, talvez seja necessario cria um container dentro, padding left e rigth.
//TODO: as cores estão com conflito no tailwind, analisar, comportamento: aplica e desaplica sozinha.
