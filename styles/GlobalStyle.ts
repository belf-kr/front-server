import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    padding: 0 20px;
    overflow-x:hidden;
    overflow-y: auto;
  }
  body{
    margin: 0;
    background-color: #FFF6EF;
    font-family: "SF Mono", "Consolas", "Menlo", monospace;
    overflow:visible;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
