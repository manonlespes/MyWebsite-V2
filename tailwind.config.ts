import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    //themes: ["retro", "dracula"],

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
          ...require("daisyui/src/theming/themes")["retro"],
          primary: "#c62a40",
          secondary: "#0e7a69",
          accent: "#f98091",
        },
      },

      "retro",
      "dracula",
    ],
  },
};

export default config;
