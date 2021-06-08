import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function AddLayout({ children }: Props): JSX.Element {
  return <S.Card>{children}</S.Card>;
}

export default AddLayout;
