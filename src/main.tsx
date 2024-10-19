import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import ClientThemeWrapper from "./context/ClientThemeWrapper.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ClientThemeWrapper>
        <App />
      </ClientThemeWrapper>
    </ThemeProvider>
  </StrictMode>
);
