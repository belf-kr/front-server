import React from "react";

import Icon from "../svg/Add.svg";

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

export default function AddIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

AddIcon.defaultProps = defaultProps;
