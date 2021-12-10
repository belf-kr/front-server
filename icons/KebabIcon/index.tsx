import React from "react";

import Icon from "../svg/Kebab.svg";

import SvgIcon from "../SvgIcon";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

const defaultProps: props = {
  size: "xSmall",
  fill: "fontSub2",
};

export default function KebabIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

KebabIcon.defaultProps = defaultProps;
