import React from "react";

import SvgIcon from "../SvgIcon";

import Icon from "../svg/Kakao.svg";

import { Fill, Size } from "../type";

type props = {
  size: Size;
  fill: Fill;
};

export default function KakaoIcon({ size, fill }: props): JSX.Element {
  return (
    <SvgIcon size={size} fill={fill}>
      <Icon />
    </SvgIcon>
  );
}

const defaultProps: props = {
  size: "xSmall",
  fill: "kakaoBrown",
};

KakaoIcon.defaultProps = defaultProps;
