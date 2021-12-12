import React from "react";
import { useRouter } from "next/router";
import * as S from "./style";

import { TodoItem } from "../../../types/components-type/todo";
import { useRecoilValue } from "recoil";
import { isPermissionState, queryStringUserState } from "../../../states/app";
import Kebab from "../../../components/Kebab";
import { MenuItemType } from "../../../types/components-type/kebab";
import { deleteTodo } from "../../../libs/todo";

type props = {
  todoItem: TodoItem;
  isLastItem: boolean;
};

export default function TodayTodoItem({ todoItem, isLastItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);

  const router = useRouter();

  function handleClickMenuItem(item: TodoItem) {
    (async () => {
      await deleteTodo(item.id);
      router.reload();
    })();
  }

  function handleWriteTodo() {
    if (isPermission) {
      router.push(`/${queryStringUser.email}/${todoItem.courseId}/todo/${todoItem.id}/write`);
    }
  }

  const menuItems: MenuItemType[] = [
    {
      showText: "삭제",
      onClick: () => {
        handleClickMenuItem(todoItem);
      },
    },
  ];

  return (
    <S.TodoItemBox onClick={handleWriteTodo}>
      <S.Color backgroundColor={todoItem.color} />
      <S.InfoBox>
        <S.TextBox>
          <S.TodoText>{todoItem.title}</S.TodoText>
        </S.TextBox>
        <S.TextBox>
          <S.CourseText>{todoItem.courseTitle}</S.CourseText>
        </S.TextBox>
        <S.KebabBox>
          {isPermission && (
            <S.KebabBox>
              <Kebab menuItems={menuItems} />
            </S.KebabBox>
          )}
        </S.KebabBox>
        <S.BorderBox isBorder={!isLastItem} />
      </S.InfoBox>
    </S.TodoItemBox>
  );
}
