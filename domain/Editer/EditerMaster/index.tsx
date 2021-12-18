import React, { useState } from "react";

import * as S from "./style";

import Button from "../../../components/Button";
import WriteNodeList from "../WriteNodeList";
import { TodoItem } from "../../../types/components-type/todo";
import useGetEditNodeList from "../../../hooks/useGetEditNodeList";
import { postWorkDone } from "../../../libs/work-done";
import { useRecoilValue } from "recoil";
import { isImgUploadEventQueueState, queryStringUserState } from "../../../states/app";
import router from "next/router";
import { expiredTokenFallback } from "../../../libs/oauth";

type props = {
  todoItem: TodoItem;
  courseId: number;
};

export default function EditerMaster({ todoItem, courseId }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isImgUploadEventQueue = useRecoilValue(isImgUploadEventQueueState);

  const [isPost, setIsPost] = useState<boolean>(false);

  const [editNodeList, setEditNodeLIst] = useGetEditNodeList();

  const addWorkDone = async () => {
    try {
      if (isPost) {
        return;
      }
      let result = true;
      // 이미지가 업로드 중 입니다.
      for (const x of isImgUploadEventQueue) {
        if (x.isUpLoad === false) {
          alert("아직 업로드 중인 이미지 파일이 있습니다.");
          return;
        }
      }

      if (editNodeList.length === 0) {
        result = confirm("작성된 블록이 없는데 생성하시겠습니까?");
      }
      if (!result) {
        return;
      }
      setIsPost(true);
      await postWorkDone({
        workTodoId: todoItem.id,
        title: todoItem.title,
        content: JSON.stringify(editNodeList),
        userId: queryStringUser.id,
      });
      setIsPost(false);
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
          <Button text={isPost ? "게시 중..." : "게시"} />
        </S.AddCourseButtonBox>
      </S.TitleBox>
      <WriteNodeList setEditNodeLIst={setEditNodeLIst} />
    </S.Box>
  );
}
