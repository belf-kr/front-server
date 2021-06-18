import React from "react";
import { default as S } from "./style";

function SkeletonUI(): JSX.Element {
  return (
    <S.Container>
      <S.Skeleton>
        <S.Indicator />
      </S.Skeleton>
    </S.Container>
  );
}

export default SkeletonUI;
