import React from "react";

import * as S from "./style";

import BelfIcon from "../../icons/BelfIcon";
import HeartIcon from "../../icons/HeartIcon";

import { ButtonType } from "../../types/style-type/follow-button";

type props = {
  type: ButtonType;
  count: number;
};

export default function FollowButton({ type, count }: props): JSX.Element {
  return (
    <S.button>
      <S.CircleBox>
        <div>{type === "belf" ? <BelfIcon /> : <HeartIcon />}</div>
      </S.CircleBox>
      <S.CountBox type={type}>
        <a>{count}</a>
      </S.CountBox>
    </S.button>
  );
}
