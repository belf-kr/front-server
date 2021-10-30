import { DefaultTheme } from "styled-components";

import common from "./common";

const fontColor = {
  main: "#131313",
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
  bg: "#FBFDFE",
  card: "#f2f2f2",
};

const lineColor = {
  main: "#ebebeb",
};

export const lightTheme: DefaultTheme = {
  fontColor,
  brandColor,
  activateColor,
  backgroundColor,
  lineColor,
  common,
};
export default lightTheme;
