import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FCF2F8",
          100: "#FAE6F0",
          200: "#F2C2D8",
          300: "#E89EBB",
          400: "#D96281",
          500: "#c62a40",
          600: "#B32235",
          700: "#941826",
          800: "#78101A",
          900: "#590810",
          950: "#3B0408",
          DEFAULT: "#c62a40",
        },
      },
      keyframes: {
        drive: {
          "0%": {
            transform: "rotateY(0deg) skewX(0deg)",
            right: "-10px",
          },
          "2%": { transform: "skewX(-10deg)" },
          "50%": { transform: "rotateY(0deg)", right: "100%" },
          "51%": { transform: "rotateY(180deg) skewX(-16deg)", right: "100%" },
          "100%": { transform: "rotateY(180deg)", right: "-100%" },
        },
      },
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
      movement: ["movement", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: "#c62a40",
          "primary-content": "#f9d7d7",
          secondary: "#0e7a69",
          "secondary-content": "#d3e4df",
          accent: "#f98091",
          "accent-content": "#150607",
          neutral: "#1b1b1b",
          "neutral-content": "#cccccc",
          "base-100": "#f2f5f8",
          "base-200": "#d2d5d8",
          "base-300": "#b4b6b8",
          "base-content": "#141515",
          info: "#1d7294",
          "info-content": "#d3e2e9",
          success: "#22d3b8",
          "success-content": "#00100c",
          warning: "#1d7294",
          "warning-content": "#d3e2e9",
          error: "#7a0e1d",
          "error-content": "#e8cfce",
        },
      },
      {
        lightTheme: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "#c62a40",
          "primary-content": "#f2f5f8",
          secondary: "#0e7a69",
          accent: "#f98091",
          "neutral-content": "#f2f5f8",
          info: "#22d3b8",
          "info-content": "#141515",
        },
        darkTheme: {
          ...require("daisyui/src/theming/themes")["night"],
          "neutral-content": "#f2f5f8",
          secondary: "#0e7a69",
        },
      },

      "bumblebee",
      "night",
    ],
  },
};

export default config;
