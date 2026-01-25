import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./",
  base: "/",
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
