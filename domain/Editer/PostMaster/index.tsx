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
      {doneItem.content.length === 0 ? (
        <>
          <h3>작성된 내용이 없습니다.</h3>
        </>
      ) : (
        <S.Body>
          <PostNodeList nodeList={doneItem.content} />
        </S.Body>
      )}
    </S.Box>
  );
}
