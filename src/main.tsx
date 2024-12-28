import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
