import React from "react";

import { default as S } from "./style";

type props = {
  text?: string;
  bgColor?: string;
  onClick?: () => void;
};

function AddButton({ text, bgColor, onClick }: props): JSX.Element {
  return (
    <S.Button bgColor={bgColor} onClick={onClick}>
      {text}
    </S.Button>
  );
}

export default AddButton;
