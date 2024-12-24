/* cSpell:disable */

import AppContainer from "@components/common/containers/AppContainer";
// import Header from "@components/header";
import Main from "@components/common/main";
import Footer from "@components/common/footer";
import {
  HeroSection,
  InsightsSection,
  InstructionsSection,
  FormSection,
} from "@components/home/index";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />
      <Main>
        <InsightsSection />
        <InstructionsSection />
        <FormSection />
      </Main>
      <Footer />
    </AppContainer>
  );
}

//TODO: AJUSTAR TODO padding da section, talvez seja necessário cria um container dentro, padding left e right.
//TODO: as cores estão com conflito no tailwind, analisar, comportamento: aplica e desaplica sozinha.(talvez seja a apenas sobrepor com !important)
//TODO: ajustar size do layout para resoluções maiores.
//TODO: Ajustar css global, existem cfg que não são necessárias
