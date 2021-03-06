import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { isRefreshQueryState, queryStringUserState } from "../../../states/app";
import { getTodayTodos } from "../../../libs/todo";

import { TodoItem } from "../../../types/components-type/todo";
import TodayTodoItem from "../TodayTodoItem";

export default function TodayTodoList(): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isRefreshQuery = useRecoilValue(isRefreshQueryState);

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getTodayTodos(queryStringUser.id);
      setTodoItems(res);
    })();
    return () => setTodoItems([]);
  }, [queryStringUser, isRefreshQuery]);

  return (
    <>
      <S.TitleBox>
        <S.Title>오늘 할 일</S.Title>
      </S.TitleBox>
      <>
        {todoItems.length === 0 ? (
          <a>할 일을 생성해주세요.</a>
        ) : (
          <S.TodoBox>
            {todoItems.map((todoItem, i) => (
              <TodayTodoItem key={"todo" + i} todoItem={todoItem} isLastItem={todoItems.length - 1 == i} />
            ))}
          </S.TodoBox>
        )}
      </>
    </>
  );
}
