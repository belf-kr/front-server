import React from "react";

import Icon from "../svg/Image.svg";

import SvgIcon from "../SvgIcon";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "fontSub",
};

export default function ImageIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

ImageIcon.defaultProps = defaultProps;
