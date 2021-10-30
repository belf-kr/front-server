import { css } from "styled-components";

export enum IconSize {
  x2Small = 14,
  xSmall = 20,
  small = 30,
  medium = 40,
  large = 50,
  xLarge = 60,
}

export const IconFill = (fill: Fill): any => {
  switch (fill) {
    case "fontMain":
      return css`
        ${({ theme }) => theme.fontColor.main};
      `;
    case "fontSub":
      return css`
        ${({ theme }) => theme.fontColor.sub};
      `;
    case "fontSub2":
      return css`
        ${({ theme }) => theme.fontColor.sub2};
      `;
    case "brandMain":
      return css`
        ${({ theme }) => theme.brandColor.main};
      `;
    case "activateError":
      return css`
        ${({ theme }) => theme.activateColor.error};
      `;
    case "kakaoBrown":
      return "#3b1e1e";
  }
};

export type Size = "x2Small" | "xSmall" | "small" | "medium" | "large" | "xLarge";

export type Fill = "fontMain" | "fontSub" | "fontSub2" | "brandMain" | "activateError" | "kakaoBrown";
