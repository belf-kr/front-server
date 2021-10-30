import React from "react";

import SvgIcon from "../SvgIcon";

import Icon from "../svg/Belf.svg";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

export default function BelfIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

const defaultProps: props = {
  size: "xSmall",
  fill: "brandMain",
};

BelfIcon.defaultProps = defaultProps;
