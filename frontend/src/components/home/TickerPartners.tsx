"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import standardPoors from "@public/partners/Standard&Poors.svg.png";
import tttt from "@public/partners/Tullett-Prebon-logo.webp";
import moody from "@public/partners/logo-moody-s-corporation-moody-s-analytics-company-moody-s-investors-service-png-favpng-LibZCL6KAVzGtN1xz6c4sm4va.jpg";
import logo2 from "@public/partners/logo@2x.png";

export default function TickerPartners() {
  const images = [
    standardPoors,
    tttt,
    moody,
    logo2,
    standardPoors,
    tttt,
    moody,
    logo2,
  ];

  return (
    <div
      id="ticker-container"
      className="relative !overflow-hidden w-full h-20 bg-white/50 flex items-center p-5"
    >
      <motion.div
        className="flex gap-6"
        initial={{ x: "100%" }}
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
            width={120} // Tamanho ajustado para as imagens
            height={120}
            className="z-20"
            src={src}
          />
        ))}
      </motion.div>
    </div>
  );
}
