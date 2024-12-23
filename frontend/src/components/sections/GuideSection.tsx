import Section from "@components/common/Section";
import TickerPartners from "@components/home/TickerPartners";

export default function GuideSection() {
  return (
    <Section
      id="guide-section"
      className="flex flex-col justify-between !bg-parallax-background_15 bg-cover items-center"
    >
      <div id="ticker-wrapper-hero-section" className="w-full h-fit my-2">
        <TickerPartners />
      </div>
      <div className="flex items-center justify-center w-5/6 h-full">
        <h3 className="uppercase text-2xl font-bold">instruction guide</h3>
      </div>
    </Section>
  );
}
