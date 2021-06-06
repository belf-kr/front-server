import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
  isNavNone?: boolean;
};

function ContentsSection({ children, isNavNone = false }: Props): JSX.Element {
  return <S.ContentsSection isNavNone={isNavNone}>{children}</S.ContentsSection>;
}

export default ContentsSection;
