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
          <span className="w-full text-3xl text-center font-extrabold">
            SECTION1
          </span>
        </Section>
        <Section>
          <span className="w-full text-3xl text-center font-extrabold">
            SECTION2
          </span>
        </Section>
        <Section>
          <span className="w-full text-3xl text-center font-extrabold">
            SECTION2
          </span>
        </Section>
      </Main>
      <Footer />
    </AppContainer>
  );
}
