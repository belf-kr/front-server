import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    overflow:hidden;
  }
  body{
    margin: 0 20px;
    padding: 0;
    background-color: #FFF6EF;
    font-family: "SF Mono", "Consolas", "Menlo", monospace;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
