/* cSpell:disable */

import AppContainer from "@components/common/container/AppContainer";
// import Header from "@components/header";
import HeroSection from "@components/sections/HeroSection";
import Main from "@components/common/Main";
import Section from "../components/common/Section";
import Footer from "@components/footer";
// import TestForm from "./form/form";

export default function Home() {
  return (
    <AppContainer>
      <HeroSection />

      <Main>
        <Section>
          <h3>Section1</h3>
        </Section>
        <Section>
          <h3>Section3</h3>
        </Section>
        <Section>
          <h3>Section4</h3>
        </Section>
      </Main>
      <Footer />
    </AppContainer>
  );
}
