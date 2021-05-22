import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function PlantingGlassSection({ children }: Props): JSX.Element {
  return <S.PlantingGlassSection>{children}</S.PlantingGlassSection>;
}

export default PlantingGlassSection;
