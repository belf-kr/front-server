import { DefaultTheme } from "styled-components";

import common from "./common";

const fontColor = {
  main: "#FBFDFE",
  sub: "#96959A",
  sub2: "#58595B",
};

const brandColor = {
  main: "#FF924A",
};

const activateColor = {
  error: "#FF5446",
};

const backgroundColor = {
  bg: "#131313",
  card: "#1B1C1E",
};

const lineColor = {
  main: "#2A2C2D",
};

export const darkTheme: DefaultTheme = {
  fontColor,
  brandColor,
  activateColor,
  backgroundColor,
  lineColor,
  common,
};
export default darkTheme;
