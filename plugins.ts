import { PluginOption } from "vite";

// For React Support
import react from "@vitejs/plugin-react";

const plugins = (_mode: string): PluginOption[] => {
  return [react({ include: "pathToAllReactFiles.{jsx,tsx}" })];
};

export default plugins;
