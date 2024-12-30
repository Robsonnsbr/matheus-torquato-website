import AppContainer from "@components/common/containers/AppContainer";
import SectionContainer from "@components/common/containers/SectionContainer";

// import Header from "@components/header";
import Main from "@components/common/main";
import Footer from "@components/common/footer";
import TickerPartners from "@components/common/ticker-partners";
import {
  Hero,
  Insights,
  Instructions,
  FormBlock,
} from "@components/home/index";

export default function Home() {
  return (
    <AppContainer>
      <SectionContainer
        id="hero-section"
        className="bg-parallax-hero-section bg-right-bottom"
      >
        <Hero />
      </SectionContainer>

      <Main>
        <SectionContainer
          id="insights-section"
          className="bg-parallax-insights-section"
        >
          <Insights />
        </SectionContainer>

        <SectionContainer
          id="instructions-section"
          className="bg-parallax-instructions-section"
        >
          <Instructions />
        </SectionContainer>

        <SectionContainer
          id="form-block-section"
          className="bg-parallax-form-section justify-between"
        >
          <FormBlock />
          <TickerPartners />
        </SectionContainer>
      </Main>

      <Footer />
    </AppContainer>
  );
}

//TODO: AJUSTAR TODO padding da section, talvez seja necessário cria um container dentro, padding left e right.
//TODO: as cores estão com conflito no tailwind, analisar, comportamento: aplica e desaplica sozinha.(talvez seja a apenas sobrepor com !important)
//TODO: ajustar size do layout para resoluções maiores.
//TODO: Ajustar css global, existem cfg que não são necessárias
