import React from "react";

import Icon from "../svg/Close.svg";

import SvgIcon from "../SvgIcon";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "brandMain",
};

export default function CloseIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

CloseIcon.defaultProps = defaultProps;
