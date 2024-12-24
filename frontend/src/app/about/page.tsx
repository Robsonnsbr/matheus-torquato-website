import React from "react";
import Main from "@components/common/main";
import ContainerMedium from "@components/common/containers/Container";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

function About() {
  return (
    <>
      <Header />
      <Main>
        <section className="global-section" id="section-about">
          <ContainerMedium>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-black">main-contact</h1>
            </div>
          </ContainerMedium>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default About;
