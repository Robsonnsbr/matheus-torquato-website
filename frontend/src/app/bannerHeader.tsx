import Image from "next/image";
import React from "react";
import favIcon from "@/app/favicon.ico";

export default function BannerHeader() {
  return (
    <div className="bg-fixed bg-banner-parallax-header bg-cover bg-right-bottom  h-[600px] w-full">
      <div className="p-10 sm font-serif flex flex-col space-y-8   sm:pt-8 sm:pl-8 md:w-max ">
        <div className="bg-gradient-to-r from-red-500 to-yellow-400  rounded-lg shadow-lg">
          <h1 className="text-3xl font-extrabold text-white">
            <span className="flex text-4xl text-accent sm:text-red">
              <Image
                alt="imagem icon"
                className="p-1"
                src={favIcon}
                width={50}
                height={50}
              />
              MAGISDATA
            </span>
            Dados precisos, impacto real.
          </h1>
          <p className="text-lg text-white mt-4">
            A solução ideal para coleta e organização de{" "}
            <span className="font-bold">dados acadêmicos</span> e{" "}
            <span className="font-bold">corporativos</span>.
          </p>
        </div>

        <div className="bg-[#BDBDBD] p-6 rounded-lg shadow-lg border text-dark border-gray-200">
          <h2 className="text-2xl font-bold ">
            <span className="text-red-600">Especialização</span> em mestrandos:
          </h2>
          <p className="text-lg  mt-2">
            Finanças, Contabilidade, Administração e mais.
          </p>
          <p className="text-lg  mt-2">
            <span className="font-bold">Acesso garantido</span> a bancos de
            dados confiáveis para suas análises.
          </p>
        </div>

        <div className="bg-[#BDBDBD] p-6 rounded-lg shadow-lg text-dark z-20">
          <h2 className="text-2xl font-bold ">
            Por que escolher o{" "}
            <span className="underline decoration-red">MAGISDATA</span>?
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="text-lg ">
              ✅ Dados organizados e prontos para uso.
            </li>
            <li className="text-lg ">
              ✅ Insights estratégicos para suas pesquisas.
            </li>
            <li className="text-lg ">✅ Confiabilidade em cada informação.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
