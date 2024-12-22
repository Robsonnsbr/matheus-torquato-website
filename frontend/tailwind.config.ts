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
        background: "var(--color-bg)",

        dark: "var(--color-dark)",
        "dark-blue": "var(--color-dark-blue)",
        "mid-dark": "var(--color-mid-dark)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        red: "var(--color-red)",
        success: "var(--color-success)",
      },
      backgroundImage: {
        "parallax-hero-section":
          'url("/images/background_header_magisdata.jpg")',
        "parallax-hero-section2": 'url("/images/background_7.jpg")',
        "parallax-background_2": 'url("/images/background_2.jpg")',
        "parallax-background_3": 'url("/images/background_3.jpg")',
        "parallax-background_11": 'url("/images/background_11.jpg")',
      },
    },
  },
  plugins: [],
} satisfies Config;
