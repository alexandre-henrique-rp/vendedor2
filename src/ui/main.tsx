import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@chakra-ui/react"
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Theme appearance="dark">
      <App />
      </Theme>
    </ChakraProvider>
  </StrictMode>
);
