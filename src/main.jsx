import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Home from "./routes/Home.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Nie znaleziono elementu #root w index.html");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Home />
    </ChakraProvider>
  </StrictMode>
);
