import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function InfoSection({ children }: Props): JSX.Element {
  return <S.InfoSection>{children}</S.InfoSection>;
}

export default InfoSection;
