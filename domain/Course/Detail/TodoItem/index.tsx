import React from "react";

import { useRecoilValue } from "recoil";

import * as S from "./style";

import CheckIcon from "../../../../icons/CheckIcon";

import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import { isPermissionState, queryStringUserState } from "../../../../states/app";
import { deleteTodo } from "../../../../libs/todo";
import { useRouter } from "next/router";
import { MenuItemType } from "../../../../types/components-type/kebab";
import Kebab from "../../../../components/Kebab";

type props = {
  todoItem: TodoItemType;
  isLastItem: boolean;
};

export default function TodoItem({ todoItem, isLastItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);

  const router = useRouter();

  function handleWriteTodo() {
    if (isPermission) {
      const uri = `/${queryStringUser.email}/${todoItem.courseId}/todo/${todoItem.id}/write`;
      router.push(uri);
    }
  }

  function handleClickMenuItem(item: TodoItemType) {
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
    <S.TodoItemBox onClick={handleWriteTodo}>
      <S.CheckIconBox>
        <CheckIcon />
      </S.CheckIconBox>
      <S.InfoBox>
        <S.TextBox>
          <S.TodoText>{todoItem.title}</S.TodoText>
        </S.TextBox>
        <S.TextBox>
          <S.ExpranationText>{todoItem.explanation}</S.ExpranationText>
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
