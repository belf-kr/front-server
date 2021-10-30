import { useEffect, useState } from "react";

import * as S from "./style";

import { getTodayTodos } from "../../../libs/todo";

import { TodoItem } from "../../../types/components-type/todo";
import TodayTodoItem from "../TodayTodoItem";

export default function TodayTodoList(): JSX.Element {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getTodayTodos();
      setTodoItems(res);
    })();
    return () => setTodoItems([]);
  }, []);
  return (
    <>
      <S.TitleBox>
        <S.Title>오늘 할일</S.Title>
      </S.TitleBox>
      <S.TodoBox>
        {todoItems.length === 0 ? (
          <a>코스를 생성해주세요</a>
        ) : (
          <>
            {todoItems.map((todoItem, i) => (
              <TodayTodoItem key={"todo" + i} todoItem={todoItem} isLastItem={todoItems.length - 1 == i} />
            ))}
          </>
        )}
      </S.TodoBox>
    </>
  );
}
