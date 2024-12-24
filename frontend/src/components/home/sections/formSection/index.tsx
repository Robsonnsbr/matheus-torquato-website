import React from "react";
import ContainerSection from "@components/common/section";
import Container from "@components/common/container/Container";
import LineWithVertical from "@components/svg/LineWithVertical";
import TestForm from "@components/home/sections/formSection/Form";
import TickerPartners from "@components/home/sections/heroSection/TickerPartners";

export default function FormSection() {
  return (
    <ContainerSection className="bg-fixed bg-parallax-form-section bg-cover flex flex-col justify-between">
      <Container className="flex flex-col">
        <LineWithVertical />
        <div className="flex flex-col w-full justify-center items-center">
          <TestForm />
        </div>
      </Container>
      <div
        id="ticker-wrapper-hero-section"
        className="w-full h-fit my-2 self-end"
      >
        <TickerPartners />
      </div>
    </ContainerSection>
  );
}
