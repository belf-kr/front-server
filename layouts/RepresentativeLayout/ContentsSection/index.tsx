import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function ContentsSection({ children }: Props): JSX.Element {
  return <S.ContentsSection>{children}</S.ContentsSection>;
}

export default ContentsSection;
