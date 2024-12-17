import Section from "@components/common/Section";

export default function GuideSection() {
  return (
    <Section
      id="guide-section"
      className="flex flex-col justify-between bg-dark-blue bg-fixed bg-parallax-background_2 bg-cover bg-left-top"
    >
      <div className="flex items-center justify-center w-full h-full">
        <h3 className="uppercase text-2xl font-bold">instruction guide</h3>
      </div>
    </Section>
  );
}
