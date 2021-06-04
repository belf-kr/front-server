import { TodoItem } from "../../libs/type/TodoTodayItem";

import TodayTodoItem from "../TodayTodoItem";

type props = {
  todoList: TodoItem[];
};

function Component({ todoList }: props): JSX.Element {
  return (
    <>
      {todoList.map((todoItem: TodoItem, index: number) => (
        <TodayTodoItem key={"i_" + index} todoItem={todoItem} />
      ))}
    </>
  );
}
export default Component;
