import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0 20px;
    padding: 0;
    background-color: #FFF6EF;
    font-family: "SF Mono", "Consolas", "Menlo", monospace;
    overflow-y: scroll;
    overflow-x: hidden;
    max-width: 390px;
  }
`;

export default GlobalStyle;
