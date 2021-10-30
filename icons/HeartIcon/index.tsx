import React from "react";

import Icon from "../svg/Heart.svg";

import SvgIcon from "../SvgIcon";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "activateError",
};

export default function HeartIcon({ size, fill }: props) {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

HeartIcon.defaultProps = defaultProps;
