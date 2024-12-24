/* cSpell:disable */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  standardp,
  tullett,
  moodys,
  barchart,
  barclays,
  afma,
  spGlobal,
} from "@public/logos";

export default function TickerPartners() {
  const images = [
    spGlobal,
    moodys,
    barchart,
    barclays,
    afma,
    standardp,
    tullett,
    spGlobal,
    moodys,
    barchart,
    barclays,
    afma,
    standardp,
    tullett,
    spGlobal,
    moodys,
    barchart,
    barclays,
    afma,
    standardp,
    tullett,
    spGlobal,
    moodys,
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
