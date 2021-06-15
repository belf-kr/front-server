import { useState } from "react";

import { default as S } from "./style";

import useClick from "../../hooks/useClick";

import bigCheck from "../../assets/icons/bigCheck";
import bigDelete from "../../assets/icons/bigDelete";

import { TodoItem } from "../../libs/type/TodoTodayItem";

type props = {
  todoItem: TodoItem;
};

function TodayTodoItem({ todoItem }: props): JSX.Element {
  const [itemLeft, setItemLeft] = useState<number>(0);

  const refClickComponent = useClick(() => {
    if (itemLeft === 0) {
      setItemLeft(-120);
    } else {
      setItemLeft(0);
    }
  });

  return (
    <S.TodoItemSection>
      <S.TodoItemCard ref={refClickComponent} left={itemLeft}>
        <S.TodoTitleSection>
          <S.CourseColor bgColor={todoItem.color} />
          <S.TodoTitle>{todoItem.reminder_title}</S.TodoTitle>
        </S.TodoTitleSection>
        <S.CourseTitle>{todoItem.course_title}</S.CourseTitle>
      </S.TodoItemCard>
      <S.ButtonSection>
        <S.EventButton>
          <S.Icon {...bigCheck}>
            <path d={bigCheck.d} />
          </S.Icon>
        </S.EventButton>
        <S.EventButton>
          <S.Icon {...bigDelete}>
            <path d={bigDelete.d} />
          </S.Icon>
        </S.EventButton>
      </S.ButtonSection>
    </S.TodoItemSection>
  );
}

export default TodayTodoItem;
