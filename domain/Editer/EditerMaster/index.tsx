import React from "react";

import * as S from "./style";

import Button from "../../../components/Button";
import WriteNodeList from "../WriteNodeList";
import { TodoItem } from "../../../types/components-type/todo";
import useGetEditNodeList from "../../../hooks/useGetEditNodeList";
import { postWorkDone } from "../../../libs/work-done";
import { useRecoilValue } from "recoil";
import { QueryStringUserState } from "../../../states/app";
import router from "next/router";
import { expiredTokenFallback } from "../../../libs/oauth";

type props = {
  todoItem: TodoItem;
};

export default function EditerMaster({ todoItem }: props): JSX.Element {
  const [editNodeList, setEditNodeLIst] = useGetEditNodeList();
  const queryStringUser = useRecoilValue(QueryStringUserState);
  const addWorkDone = async () => {
    try {
      await postWorkDone({
        workTodoId: todoItem.id,
        title: todoItem.title,
        content: JSON.stringify(editNodeList),
        userId: queryStringUser.id,
      });
      router.back();
    } catch (error) {
      expiredTokenFallback(error);
    }
  };

  return (
    <S.Box>
      <S.TitleBox>
        <S.Title>{todoItem.title}</S.Title>
        <S.AddCourseButtonBox onClick={addWorkDone}>
          <Button text={"게시"} />
        </S.AddCourseButtonBox>
      </S.TitleBox>
      <WriteNodeList setEditNodeLIst={setEditNodeLIst} />
    </S.Box>
  );
}
