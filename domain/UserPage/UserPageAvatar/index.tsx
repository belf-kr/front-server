import React from "react";

import * as S from "./style";

type props = {
  src: string;
};

export default function UserPageAvatar({ src }: props): JSX.Element {
  return (
    <S.Box>
      <img src={src} />
    </S.Box>
  );
}
