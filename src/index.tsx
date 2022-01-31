import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
