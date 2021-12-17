import React, { useEffect, useState } from "react";

import * as S from "./style";

import { useRecoilValue } from "recoil";
import { isPermissionState, isRefreshQueryState, queryStringUserState } from "../../../../states/app";

import { getTodayTodos } from "../../../../libs/todo";
import { TodoItem as TodoItemType } from "../../../../types/components-type/todo";
import TodoItem from "../TodoItem";
import { useRouter } from "next/router";
import Button from "../../../../components/Button";
import { getCourses } from "../../../../libs/course";

const toStringByFormatting = (date) => {
  return date.toISOString().split("T")[0];
};

type Props = {
  currentDate: Date;
};

export default function TodoList({ currentDate }: Props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);
  const isRefreshQuery = useRecoilValue(isRefreshQueryState);

  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);
  const [isThereCourses, setIsThereCourses] = useState<boolean>();

  const router = useRouter();

  //추후 삭제 예정
  const maximumActiveDate = new Date(currentDate);
  maximumActiveDate.setDate(maximumActiveDate.getDate() + 1);

  function handleNewTodo() {
    router.push("/new-todo");
  }

  function handleNewCourses() {
    router.push("/new-course");
  }

  async function GetCourses() {
    const res = await getCourses(queryStringUser.id);
    setIsThereCourses(!!res.length);
  }

  useEffect(() => {
    (async () => {
      const res = await getTodayTodos(
        queryStringUser.id,
        parseInt(router.query?.courseId as string, 10),
        toStringByFormatting(currentDate),
        toStringByFormatting(maximumActiveDate)
      );
      setTodoItems(res);
    })();
    return () => setTodoItems([]);
  }, [currentDate, isRefreshQuery]);

  useEffect(() => {
    GetCourses();
  }, []);

  useEffect(() => {
    GetCourses();
  }, [isRefreshQuery]);

  return (
    <>
      <S.TitleBox>
        <S.Title>{"할 일"}</S.Title>
        {isPermission &&
          (isThereCourses ? (
            <S.AddButtonBox onClick={handleNewTodo}>
              <Button text={"새로운 할 일 추가"} />
            </S.AddButtonBox>
          ) : (
            <S.AddButtonBox onClick={handleNewCourses}>
              <Button text={"할 일 추가를 위해 코스 생성하기"} />
            </S.AddButtonBox>
          ))}
      </S.TitleBox>
      {todoItems.length === 0 ? (
        <a>할 일을 생성해주세요.</a>
      ) : (
        <>
          <S.TodoBox>
            {todoItems.map((todoItem, i) => (
              <TodoItem key={"todo" + i} todoItem={todoItem} isLastItem={todoItems.length - 1 == i} />
            ))}
          </S.TodoBox>
        </>
      )}
    </>
  );
}
