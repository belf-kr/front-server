import React from "react";

import * as S from "./style";

type Props = {
  explanation: string;
};

export default function ExplanationTextArea({ explanation }: Props): JSX.Element {
  return (
    <S.Box>
      <S.SubTitleBox>
        <S.SubTitle>설명</S.SubTitle>
      </S.SubTitleBox>
      <S.Card>{explanation}</S.Card>
    </S.Box>
  );
}
