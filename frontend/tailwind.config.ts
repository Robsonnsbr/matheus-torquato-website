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
      screens: {
        "3xl": "1920px", // Custom breakpoint para 1920px
      },

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
        blue: "var(--color-blue)",
        green: "var(--color-green)",
        "light-green": "var(--color-light-green)",
        "extra-light-green": "var(--color-extra-light-green)",
      },
      backgroundImage: {
        "parallax-hero-section": 'url("/background/hero-section.jpg")',
        "parallax-insights-section": 'url("/background/insights-section.jpg")',
        "parallax-instructions-section":
          'url("/background/instructions-section.jpg")',
        "parallax-form-section": 'url("/background/form-section.jpg")',
        "background-form": 'url("/background/background-form.jpg")',
      },
    },
  },
  plugins: [],
} satisfies Config;
