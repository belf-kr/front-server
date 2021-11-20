import React, { useEffect, useState } from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../states/app";

import { getTodayTodos } from "../../../../libs/todo";
import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import TodoItem from "../TodoItem";
import { useRouter } from "next/router";

const toStringByFormatting = (date) => {
  return date.toISOString().split("T")[0];
};

type Props = {
  isDoneTodo: boolean;
  currentDate: Date;
};

export default function TodoList({ isDoneTodo, currentDate }: Props): JSX.Element {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);

  const userInfo = useRecoilValue(userInfoState);

  const router = useRouter();

  //추후 삭제 예정
  const maximumActiveDate = new Date(currentDate);
  maximumActiveDate.setDate(maximumActiveDate.getDate() + 1);

  useEffect(() => {
    (async () => {
      const res = await getTodayTodos(
        userInfo.id,
        parseInt(router.query?.courseId as string, 10),
        toStringByFormatting(currentDate),
        toStringByFormatting(maximumActiveDate)
      );
      setTodoItems(res);
    })();
    return () => setTodoItems([]);
  }, [currentDate]);
  return (
    <>
      <S.TitleBox>
        <S.Title>{isDoneTodo ? "한일" : "할일"}</S.Title>
      </S.TitleBox>
      <S.TodoBox>
        {todoItems.length === 0 ? (
          <a>{isDoneTodo ? "한일" : "할일"}을 생성해주세요</a>
        ) : (
          <>
            {todoItems.map((todoItem, i) => (
              <TodoItem key={"todo" + i} todoItem={todoItem} isLastItem={todoItems.length - 1 == i} isDoneTodo={isDoneTodo} />
            ))}
          </>
        )}
      </S.TodoBox>
    </>
  );
}
