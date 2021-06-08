import { ReactNode } from "react";
import { default as S } from "./style";

type props = {
  children?: ReactNode;
};

function ColorsSection({ children }: props): JSX.Element {
  return <S.ColorsSection>{children}</S.ColorsSection>;
}

export default ColorsSection;
