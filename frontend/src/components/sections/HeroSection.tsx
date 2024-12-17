import Section from "@components/common/Section";
import SvgLogoComponent from "@components/svg/SvgLogoComponent";
import TickerPartners from "@components/home/TickerPartners";

export default function HeroSection() {
  return (
    <Section
      id="hero-section"
      className="flex flex-col justify-between bg-fixed bg-parallax-hero-section2 bg-cover bg-left-top"
    >
      <div className="relative w-5/6 m-auto">
        <div className="flex items-start justify-start w-2/4">
          <div className=" rounded-md font-poppins flex flex-col space-y-8  sm:pt-8 sm:pl-8 md:w-max">
            <div className=" text-white p-2  rounded-lg shadow-lg">
              <h1 className="text-3xl font-extrabold sm:text-left text-balance text-center">
                <span className="text-white font-raleway flex text-5xl text-accent sm:text-red items-center gap-2 underline decoration-[#D6002A]">
                  <SvgLogoComponent width={50} height={40} />
                  MAGISDATA:
                </span>
              </h1>
              <p className="text-3xl font-extrabold text-balance text-center sm:text-right">
                Dados precisos, impacto real. Dados precisos, impacto real.
                Dados precisos, impacto real. Dados precisos, impacto real.
                Dados precisos, impacto real. Dados precisos, impacto real.
                Dados
              </p>
              <p className="text-lg text-white mt-4">
                A solução ideal para coleta e organização de{" "}
                <span className="font-bold">dados acadêmicos</span> e{" "}
                <span className="font-bold">corporativos</span>.
              </p>
              <p className="text-lg text-white mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing e{" "}
                <span className="font-bold">dados acadêmicos</span> e{" "}
                <span className="font-bold">corporativos</span>.
              </p>
              <p className="text-lg text-white mt-4">
                ipsum dolor, sit amet consectetur adipisicing e{" "}
                <span className="font-bold">dados acadêmicos</span> e{" "}
                <span className="font-bold">corporativos</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="ticker-wrapper-hero-section" className="w-full h-fit">
        <TickerPartners />
      </div>
    </Section>
  );
}
