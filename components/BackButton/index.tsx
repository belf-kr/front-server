import React from "react";

import { default as S } from "./style";

import nomalRightArrow from "../../assets/icons/nomalRightArrow";

type props = {
  onClick?: () => void;
};

function BackButton({
  onClick = () => {
    window.history.back();
  },
}: props): JSX.Element {
  return (
    <S.Button onClick={onClick}>
      <S.Icon {...nomalRightArrow} fill={"white"}>
        <path d={nomalRightArrow.d} />
      </S.Icon>
    </S.Button>
  );
}

export default BackButton;
