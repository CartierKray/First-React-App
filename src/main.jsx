import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";
// import "./index.css";  // deze wordt niet meer gebruikt want we gebruiken nu de Chakra UI
import * as ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
