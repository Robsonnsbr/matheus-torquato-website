import React from "react";
import ContainerMedium from "@/components/common/container/ContainerMedium";
import Main from "@/components/common/Main";
// import InfoContact from '../../components/contact/InfoContact';

function Contact() {
  return (
    <>
      <Main>
        <section className="global-section" id="section-contact">
          <ContainerMedium>
            <div className="w-full h-full flex flex-col">
              <ul className="flex flex-col md:flex-row gap-8">
                <li className="flex-1">{/* <FormSimple /> */}</li>
                <li className="flex-1">{/* <InfoContact /> */}</li>
              </ul>
            </div>
          </ContainerMedium>
        </section>
      </Main>
    </>
  );
}

export default Contact;
