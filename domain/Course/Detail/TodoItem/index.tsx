import React from "react";

import { useRecoilValue } from "recoil";

import * as S from "./style";

import CheckIcon from "../../../../icons/CheckIcon";

import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import Link from "next/link";
import { isPermissionState, queryStringUserState } from "../../../../states/app";
import { deleteTodo } from "../../../../libs/todo";
import router from "next/router";
import { MenuItemType } from "../../../../types/components-type/kebab";
import Kebab from "../../../../components/Kebab";

type props = {
  todoItem: TodoItemType;
  isLastItem: boolean;
  isDoneTodo: boolean;
};

export default function TodoItem({ todoItem, isLastItem, isDoneTodo }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);

  const uri = isDoneTodo ? `/` : `/${queryStringUser.email}/${todoItem.courseId}/todo/${todoItem.id}/write`;

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
    <Link href={uri} passHref={true}>
      <S.TodoItemBox>
        <S.CheckIconBox isDoneTodo={isDoneTodo}>
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
    </Link>
  );
}
