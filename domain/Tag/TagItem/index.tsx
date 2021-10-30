import * as S from "./style";

import { Tag as TagType } from "../../../types/components-type/course";

type props = {
  tagItem: TagType;
};

export default function HashTagItem({ tagItem }: props): JSX.Element {
  return (
    <S.TagBox>
      <S.Hash>#</S.Hash>
      <S.Text>{tagItem.value}</S.Text>
    </S.TagBox>
  );
}
