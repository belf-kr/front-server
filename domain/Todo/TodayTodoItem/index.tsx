import React from "react";
import Link from "next/link";
import * as S from "./style";

import { TodoItem } from "../../../types/components-type/todo";
import { useRecoilValue } from "recoil";
import { QueryStringUserState } from "../../../states/app";
import Kebab from "../../../components/Kebab";
import { MenuItemType } from "../../../types/components-type/kebab";
import router from "next/router";
import { deleteTodo } from "../../../libs/todo";

type props = {
  todoItem: TodoItem;
  isLastItem: boolean;
};

export default function TodayTodoItem({ todoItem, isLastItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(QueryStringUserState);

  function handleClickMenuItem(item: TodoItem) {
    (async () => {
      await deleteTodo(item.id);
      router.reload();
    })();
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
    <Link href={`/${queryStringUser.email}/${todoItem.courseId}/todo/${todoItem.id}/write`} passHref={true}>
      <S.TodoItemBox>
        <S.Color backgroundColor={todoItem.color} />
        <S.InfoBox>
          <S.TextBox>
            <S.TodoText>{todoItem.title}</S.TodoText>
          </S.TextBox>
          <S.TextBox>
            <S.CourseText>{todoItem.courseTitle}</S.CourseText>
          </S.TextBox>
          <S.KebabBox>
            <Kebab menuItems={menuItems} />
          </S.KebabBox>
          <S.BorderBox isBorder={!isLastItem} />
        </S.InfoBox>
      </S.TodoItemBox>
    </Link>
  );
}
