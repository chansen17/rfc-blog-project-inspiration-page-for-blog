import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from "./App";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #1E1E2E;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
  html {
    padding: 0;
    margin: 0;
  }
`;

const theme = {
  colors: {
    black: "#222",
    orange: "orange",
    red: "maroon",
    white: "#eee"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
