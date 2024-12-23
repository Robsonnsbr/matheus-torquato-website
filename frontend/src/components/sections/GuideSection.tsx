import Section from "@components/common/Section";

export default function GuideSection() {
  return (
    <Section
      id="guide-section"
      className="flex flex-col justify-between !bg-light-green items-center"
    >
      <div className="flex items-center justify-center w-5/6 h-full">
        <h3 className="uppercase text-2xl font-bold">instruction guide</h3>
      </div>
    </Section>
  );
}
