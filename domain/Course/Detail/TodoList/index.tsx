import React, { useEffect, useState } from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../states/app";

import { getTodayTodos } from "../../../../libs/todo";
import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import TodoItem from "../TodoItem";

type Props = {
  isDoneTodo: boolean;
};

export default function TodoList({ isDoneTodo }: Props): JSX.Element {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);

  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    (async () => {
      const res = await getTodayTodos(userInfo.id);
      setTodoItems(res);
    })();
    return () => setTodoItems([]);
  }, []);
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
