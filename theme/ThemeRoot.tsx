import React, { ReactNode } from "react";

import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";

import { themeState } from "../states/themeState";

import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { GlobalStyle } from "./GlobalStyle";

type props = {
  children?: ReactNode;
};

export default function ThemeRoot({ children }: props): JSX.Element {
  const [theme] = useRecoilState(themeState);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
