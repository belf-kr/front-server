import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: ${({ theme }: { theme: any }) => theme.fontSize.standard};
    padding: 0 20px;
    overflow-x:hidden;
    overflow-y: auto;
    background-color: #FFF6EF;
    max-width: 350px;
    margin: auto;
    font-family: "SF Mono", "Consolas", "Menlo", monospace;
  }
  body{
    margin: 0;
    overflow:visible;
  }
  button{
    cursor: pointer;
  }
  div{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
