import Image from "next/image";
import React from "react";
import bannerHeader_base from "../../public/images/bannerHeader_base.png";
import standardPoors from "../../public/partners/Standard&Poors.svg.png";
import tttt from "../../public/partners/Tullett-Prebon-logo.webp";
import moody from "../../public/partners/logo-moody-s-corporation-moody-s-analytics-company-moody-s-investors-service-png-favpng-LibZCL6KAVzGtN1xz6c4sm4va.jpg";
import transparent from "../../public/partners/png-transparent-s-p-global.png";
import logo2 from "../../public/partners/logo@2x.png";

export default function TesteElemento() {
  return (
    <div className="relative w-full h-full">
      <Image
        alt="image standard&Poors"
        className="absolute -top-36"
        src={bannerHeader_base}
      />
      <div className="w-full h-fit bg-accent flex flex-wrap justify-center gap-6 p-5">
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
        <Image
          alt="image standard&Poors2"
          width={500}
          height={500}
          className="w-28"
          src={tttt}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={moody}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={transparent}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={logo2}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
        <Image
          alt="image standard&Poors2"
          width={500}
          height={500}
          className="w-28"
          src={tttt}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={moody}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={transparent}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={logo2}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
        <Image
          alt="image standard&Poors2"
          width={500}
          height={500}
          className="w-28"
          src={tttt}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={moody}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={transparent}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={logo2}
        />
        <Image
          alt="image standard&Poors"
          width={500}
          height={500}
          className="w-28"
          src={standardPoors}
        />
      </div>
    </div>
  );
}
