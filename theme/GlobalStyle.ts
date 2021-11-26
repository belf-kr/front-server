import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background: ${({ theme }) => theme.backgroundColor.bg};
    width:100%;
    height: 100%;
  }
  body {
    background: ${({ theme }) => theme.backgroundColor.bg};
    color: ${({ theme }) => theme.fontColor.main};
    font-family: "Noto Sans CJK KR", sans-serif !important;
    transition: all 0.25s linear;
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
  }
  #__next {
    width:100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor.bg};
  }
  button { 
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
