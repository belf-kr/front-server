import React, { useState } from "react";
import * as S from "./style";

import { DoneItem } from "../../../types/components-type/todo";
import PostNodeList from "../PostNodeList";

type props = {
  postDoneItem: DoneItem;
};

export default function PostMaster({ postDoneItem }: props): JSX.Element {
  const [doneItem] = useState<DoneItem>(postDoneItem);

  return (
    <S.Box>
      <S.TitleBox>
        <S.Title>{postDoneItem.title}</S.Title>
      </S.TitleBox>
      <S.Body>
        <PostNodeList nodeList={doneItem.content} />
      </S.Body>
    </S.Box>
  );
}
