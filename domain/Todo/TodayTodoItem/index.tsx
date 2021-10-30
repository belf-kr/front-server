import * as S from "./style";

import ArrowIcon from "../../../icons/ArrowIcon";

import { TodoItem } from "../../../types/components-type/todo";

type props = {
  todoItem: TodoItem;
  isLastItem: boolean;
};

export default function TodayTodoItem({ todoItem, isLastItem }: props): JSX.Element {
  return (
    <S.TodoItemBox>
      <S.Color backgroundColor={todoItem.color} />
      <S.InfoBox>
        <S.TextBox>
          <S.TodoText>{todoItem.title}</S.TodoText>
        </S.TextBox>
        <S.TextBox>
          <S.CourseText>{todoItem.courseTitle}</S.CourseText>
        </S.TextBox>
        <S.ArrowBox>
          <ArrowIcon />
        </S.ArrowBox>
        <S.BorderBox isBorder={!isLastItem} />
      </S.InfoBox>
    </S.TodoItemBox>
  );
}
