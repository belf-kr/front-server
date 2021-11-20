import React from "react";

import * as S from "./style";

import ArrowIcon from "../../../../icons/ArrowIcon";
import CheckIcon from "../../../../icons/CheckIcon";

import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";

type props = {
  todoItem: TodoItemType;
  isLastItem: boolean;
  isDoneTodo: boolean;
};

export default function TodoItem({ todoItem, isLastItem, isDoneTodo }: props): JSX.Element {
  return (
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
  );
}
