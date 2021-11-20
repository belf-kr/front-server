import React from "react";

import SvgIcon from "../SvgIcon";

import Icon from "../svg/Check.svg";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

export default function CheckIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

const defaultProps: props = {
  size: "xSmall",
  fill: "fontSub",
};

CheckIcon.defaultProps = defaultProps;
