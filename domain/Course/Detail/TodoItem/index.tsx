import React from "react";

import { useRecoilValue } from "recoil";

import * as S from "./style";

import ArrowIcon from "../../../../icons/ArrowIcon";
import CheckIcon from "../../../../icons/CheckIcon";

import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import Link from "next/link";
import { userInfoState } from "../../../../states/app";

type props = {
  todoItem: TodoItemType;
  isLastItem: boolean;
  isDoneTodo: boolean;
};

export default function TodoItem({ todoItem, isLastItem, isDoneTodo }: props): JSX.Element {
  const userInfo = useRecoilValue(userInfoState);
  const uri = isDoneTodo ? `/` : `/${userInfo.email}/${todoItem.courseId}/todo/${todoItem.id}/write`;
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
          <S.ArrowBox>
            <ArrowIcon />
          </S.ArrowBox>
          <S.BorderBox isBorder={!isLastItem} />
        </S.InfoBox>
      </S.TodoItemBox>
    </Link>
  );
}
