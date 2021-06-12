import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function BelfAndLikeSection({ children }: Props): JSX.Element {
  return <S.BelfAndLikeSection>{children}</S.BelfAndLikeSection>;
}

export default BelfAndLikeSection;
