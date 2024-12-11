import React from "react";
import Main from "@/components/common/Main";
import ContainerMedium from "@/components/common/container/ContainerMedium";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
