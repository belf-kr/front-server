import { useRecoilValue } from "recoil";

import { getTodayTodoListSelector } from "../../states/TodayTodoList";

import { TodoItem } from "../../libs/type/TodoTodayItem/indes";

import TodayTodoItem from "../TodayTodoItem";

function Component(): JSX.Element {
  const todoTodayList = useRecoilValue(getTodayTodoListSelector);

  return (
    <>
      {todoTodayList.map((todoItem: TodoItem, index: number) => (
        <TodayTodoItem key={"i_" + index} todoItem={todoItem} />
      ))}
    </>
  );
}
export default Component;
