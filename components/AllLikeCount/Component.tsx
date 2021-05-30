import { default as S } from "./style";

import bar from "../../assets/icons/bar";
import like from "../../assets/icons/like";

type props = {
  count: number;
};

function Component({ count }: props): JSX.Element {
  return (
    <>
      <S.Box>
        <S.IconArea>
          <S.Icon {...like}>
            <path d={like.d} />
          </S.Icon>
        </S.IconArea>
        <S.BarArea>
          <S.Icon {...bar}>
            <path d={bar.d} />
          </S.Icon>
        </S.BarArea>
        <S.TextArea>{count}</S.TextArea>
      </S.Box>
    </>
  );
}
export default Component;
