import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ColorModeScript, ChakraProvider,theme } from "@chakra-ui/react";
import ColorMode from "./ColorMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
     <ColorMode/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
