import React from "react";

import * as S from "./style";

import BelfIcon from "../../../../../icons/BelfIcon";

export default function BelfLoading(): JSX.Element {
  return (
    <S.FadeBox>
      <S.AnimationBox>
        <S.BelfIconBox>
          <BelfIcon size="medium" />
        </S.BelfIconBox>
        <S.ContainerBox>
          <S.SpinBall />
          <S.SpinBall />
          <S.SpinBall />
          <S.SpinBall />
          <S.SpinBall />
          <S.SpinBall />
          <S.SpinBall />
        </S.ContainerBox>
      </S.AnimationBox>
    </S.FadeBox>
  );
}
