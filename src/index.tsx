import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { storeConfig } from "state/store";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { primaryBG } from "styles/colors";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
}

body {
  background: ${primaryBG};
  overflow: hidden auto;
}

html {
    font-family: "Roboto", sans-serif;
}
`;

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={storeConfig().store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
