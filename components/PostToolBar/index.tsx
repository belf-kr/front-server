import React, { ReactNode } from "react";
import { default as S } from "./style";

type props = {
  children: ReactNode;
};

function PostToolBar({ children }: props): JSX.Element {
  return (
    <S.Frame>
      <S.Card>{children}</S.Card>
    </S.Frame>
  );
}

export default PostToolBar;
