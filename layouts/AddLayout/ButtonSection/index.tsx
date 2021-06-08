import { ReactNode } from "react";

import { default as S } from "./style";

type props = {
  children?: ReactNode;
};

function ButtonSection({ children }: props): JSX.Element {
  return (
    <S.ButtonSection>
      <S.ButtonGrid>{children}</S.ButtonGrid>
    </S.ButtonSection>
  );
}

export default ButtonSection;
