import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import { defaultTheme } from "./Contexts/ThemeContext";
import { Box } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <ColorModeProvider>
        {/* <ColorModeScript initialColorMode={defaultTheme.config.initialColorMode}/> */}
        <App />
        <CSSReset />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
