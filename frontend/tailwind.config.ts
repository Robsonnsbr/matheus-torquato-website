import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-parallax-header": 'url("/images/bannerHeader_2.jpg")',
      },
      colors: {
        background: "var(--background)",
        dark: "var(--color-dark)",
        "mid-dark": "var(--color-mid-dark)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        red: "var(--color-red)",
      },
    },
  },
  plugins: [],
} satisfies Config;
