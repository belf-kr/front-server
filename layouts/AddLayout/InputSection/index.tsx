import { ReactNode } from "react";

import { default as S } from "./style";

type props = {
  children?: ReactNode;
  marginTop?: string;
};

function InputSection({ children, marginTop }: props): JSX.Element {
  return <S.InputSection marginTop={marginTop}>{children}</S.InputSection>;
}

export default InputSection;
