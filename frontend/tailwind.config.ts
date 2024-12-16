/* cSpell:disable */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        openSans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "var(--color-bg)", // Alterado para --color-bg
        dark: "var(--color-dark)",
        "mid-dark": "var(--color-mid-dark)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        error: "var(--color-error)", // Alterado para --color-error
        success: "var(--color-success)", // Alterado para --color-success
      },
      textDecorationColor: {
        error: "var(--color-error)", // Alterado para --color-error
      },
      backgroundImage: {
        "parallax-hero-section":
          'url("/images/background_header_magisdata.jpg")',
        "parallax-hero-section2": 'url("/images/background_7.jpg")',
        "banner-parallax-header": 'url("/images/bannerHeader_2.jpg")',
      },
    },
  },
  plugins: [],
} satisfies Config;
