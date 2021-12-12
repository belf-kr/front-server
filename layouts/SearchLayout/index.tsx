import React, { ReactNode } from "react";

import * as S from "./style";

type props = {
  children?: ReactNode;
};

export default function SearchLayout({ children }: props): JSX.Element {
  return <S.Layout>{children}</S.Layout>;
}
