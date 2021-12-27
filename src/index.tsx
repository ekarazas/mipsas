import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    overflow: hidden auto;
}
html {
    font-family: "Roboto", sans-serif;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
