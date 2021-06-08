import React from "react";

import { default as S } from "./style";

type props = {
  text?: string;
  bgColor?: string;
};

function AddButton({ text, bgColor }: props): JSX.Element {
  return <S.Button bgColor={bgColor}>{text}</S.Button>;
}

export default AddButton;
