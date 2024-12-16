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
        background: "var(--background)",
        dark: "var(--color-dark)",
        "mid-dark": "var(--color-mid-dark)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        red: "var(--color-red)",
      },
      textDecorationColor: {
        red: "var(--color-red)",
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
