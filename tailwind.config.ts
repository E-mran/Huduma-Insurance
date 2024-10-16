import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      text: ["Josefin Sans", "sans-serif"],
      // titles: ["Roboto Mono", "monospace"],
      titles: ["TitlesFont", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cgreen: {
          100: "#7ACFAA",
          200: "#46AB7F",
          300: "#146642",
        },
        corange: {
          100: "#F6AD79",
          200: "#FE984E",
          300: "#FF720D",
        },
        cgray: {
          100: "#D9D9D9",
          200: "#D1D1D1",
          300: "#c7c7c7",
          400: "#767676",
          500: "#3F3F3F",
          600: "#2a2a2a",
        },
        cblack: {
          100: "#323030",
          200: "#242424",
          300: "#1E1E1E",
        },
        cwhite: {
          100: "#FFFFFF",
          200: "#FBFBFB",
          300: "#F0F0F0",
          400: "#DDDDDD",
        },
      },
      typography: (theme: any) => ({
        light: {
          css: {
            color: theme("colors.cblack.300"),
            a: {
              color: theme("colors.black"),
              // "&:hover": {
              //   color: theme("colors.black"),
              // },
            },
            p: {
              color: theme("colors.cgray.500"),
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.black"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.cwhite.400"),
            a: {
              color: theme("colors.white"),
              // "&:hover": {
              //   color: theme("colors.white"),
              // },
            },
            p: {
              color: theme("colors.cgray.200"),
            },
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.white"),
            },
          },
        },
      }),
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
