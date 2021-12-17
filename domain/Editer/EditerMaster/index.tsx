import React from "react";

import * as S from "./style";

import Button from "../../../components/Button";
import WriteNodeList from "../WriteNodeList";
import { TodoItem } from "../../../types/components-type/todo";
import useGetEditNodeList from "../../../hooks/useGetEditNodeList";
import { postWorkDone } from "../../../libs/work-done";
import { useRecoilValue } from "recoil";
import { queryStringUserState } from "../../../states/app";
import router from "next/router";
import { expiredTokenFallback } from "../../../libs/oauth";

type props = {
  todoItem: TodoItem;
  courseId: number;
};

export default function EditerMaster({ todoItem, courseId }: props): JSX.Element {
  const [editNodeList, setEditNodeLIst] = useGetEditNodeList();
  const queryStringUser = useRecoilValue(queryStringUserState);

  const addWorkDone = async () => {
    try {
      let result = true;
      if (editNodeList.length === 0) {
        result = confirm("작성된 블록이 없는데 생성하시겠습니까?");
      }
      if (!result) {
        return;
      }

      await postWorkDone({
        workTodoId: todoItem.id,
        title: todoItem.title,
        content: JSON.stringify(editNodeList),
        userId: queryStringUser.id,
      });
      router.replace(`/${queryStringUser.email}/${courseId}?tab=doneTodoList`);
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
