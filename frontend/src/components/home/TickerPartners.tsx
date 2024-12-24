"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import standardPoors from "@public/partners/Standard&Poors.svg.png";
import tttt from "@public/partners/Tullett-Prebon-logo.webp";
import moody from "@public/partners/pngegg.png";
import logo2 from "@public/partners/logo@2x.png";
import pngwing from "@public/partners/pngwing.com.png";
import afma from "@public/partners/website_afma_web.png";

export default function TickerPartners() {
  const images = [
    moody,
    logo2,
    pngwing,
    afma,
    standardPoors,
    tttt,
    moody,
    logo2,
    pngwing,
    afma,
    standardPoors,
    tttt,
    moody,
    logo2,
    pngwing,
    afma,
    standardPoors,
    tttt,
    moody,
    logo2,
    pngwing,
    afma,
  ];

  return (
    <div
      id="ticker-container"
      className="relative !overflow-hidden w-full  bg-none flex items-center  self-end"
    >
      <motion.div
        className="flex gap-6 h-12"
        animate={{ x: "-100%" }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            alt={`image ${index}`}
            width={120} // Tamanho ajustado para as imagens
            height={50}
            className="z-20"
            src={src}
          />
        ))}
      </motion.div>
    </div>
  );
}
