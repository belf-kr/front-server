import { default as S } from "./style";

import belf from "../../assets/icons/belf";
import bar from "../../assets/icons/bar";

function Component(): JSX.Element {
  return (
    <>
      <S.Box>
        <S.IconArea>
          <S.Icon {...belf}>
            <path d={belf.d} />
          </S.Icon>
        </S.IconArea>
        <S.BarArea>
          <S.Icon {...bar}>
            <path d={bar.d} />
          </S.Icon>
        </S.BarArea>
        <S.TextArea>100k</S.TextArea>
      </S.Box>
    </>
  );
}
export default Component;
