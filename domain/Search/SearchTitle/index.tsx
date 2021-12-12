import React from "react";

import * as S from "./style";

type props = {
  keyword: string;
};

export default function SearchTitle({ keyword }: props): JSX.Element {
  return (
    <S.TitleBox>
      <S.Title>{`검색 결과 "${keyword}"`}</S.Title>
    </S.TitleBox>
  );
}
