import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function HeaderSection({ children }: Props): JSX.Element {
  return <S.HeaderSection>{children}</S.HeaderSection>;
}

export default HeaderSection;
