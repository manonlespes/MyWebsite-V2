import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundPosition: {
      fromTo: "0 100%",
    },
    backgroundSize: {
      link: "100% 2px",
      "link-hover": "100% 100%",
      "link-footer": "0px 2px",
      "link-footer-hover": "100% 2px",
    },
    fontSize: {
      sm: [
        "1rem",
        {
          letterSpacing: "0.025em",
        },
      ],
      base: [
        "1.25rem",
        {
          letterSpacing: "0.030em",
        },
      ],
      lg: [
        "1.27rem",
        {
          letterSpacing: "0.030em",
        },
      ],
      xl: "1.5rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
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
        lightTheme: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "#c62a40",
          "primary-content": "#f2f5f8",
          secondary: "#0e7a69",
          "secondary-content": "black",
          accent: "#c62a40",
          "neutral-content": "#f2f5f8",
          info: "#22d3b8",
          "info-content": "#141515",
        },
        darkTheme: {
          ...require("daisyui/src/theming/themes")["night"],
          "neutral-content": "#f2f5f8",
          secondary: "#0e7a69",
          accent: "#f98091",
          info: "#89EBDC",
        },
      },

      "bumblebee",
      "night",
    ],
  },
};

export default config;
