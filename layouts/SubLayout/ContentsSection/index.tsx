import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
  isBottomContents?: boolean;
};

function ContentsSection({ children, isBottomContents = false }: Props): JSX.Element {
  return <S.ContentsSection isBottomContents={isBottomContents}>{children}</S.ContentsSection>;
}

export default ContentsSection;
