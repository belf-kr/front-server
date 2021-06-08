import { ReactNode } from "react";
import { default as S } from "./style";

type props = {
  children?: ReactNode;
};

function InputSection({ children }: props): JSX.Element {
  return <S.InputSection>{children}</S.InputSection>;
}

export default InputSection;
