/* cSpell:disable */
"use client";
import Image from "next/image";
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
      className="relative !overflow-hidden w-full h-fit my-2 bg-none flex items-center"
    >
      <motion.div
        id="ticker-component"
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
            width={400}
            height={400}
            style={{ height: "3rem", width: "auto" }}
            className="z-20"
            src={src}
          />
        ))}
      </motion.div>
    </div>
  );
}
