"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import bannerHeader_base3 from "../../public/images/bannerHeader_base3.png";
import standardPoors from "../../public/partners/Standard&Poors.svg.png";
import tttt from "../../public/partners/Tullett-Prebon-logo.webp";
import moody from "../../public/partners/logo-moody-s-corporation-moody-s-analytics-company-moody-s-investors-service-png-favpng-LibZCL6KAVzGtN1xz6c4sm4va.jpg";
import transparent from "../../public/partners/png-transparent-s-p-global.png";
import logo2 from "../../public/partners/logo@2x.png";

export default function TesteElemento() {
  const images = [
    standardPoors,
    tttt,
    moody,
    transparent,
    logo2,
    standardPoors,
    tttt,
    moody,
    transparent,
    logo2,
  ];

  return (
    <div className="relative w-full h-full ">
      {/* <Image
        alt="image bannerHeader_base"
        className="absolute bottom-full z-50"
        src={bannerHeader_base3}
      /> */}
      <div className="w-full h-fit bg-white flex items-center overflow-hidden p-5">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              alt={`image ${index}`}
              width={500}
              height={500}
              className="w-28 z-20"
              src={src}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-6"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, index) => (
            <Image
              key={`copy-${index}`}
              alt={`image copy ${index}`}
              width={500}
              height={500}
              className="w-28 z-20"
              src={src}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
