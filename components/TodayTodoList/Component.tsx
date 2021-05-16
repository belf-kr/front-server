import { useRecoilValue } from "recoil";
import { todayTodoListState } from "../../states/TodayTodoList";
import { TodoItem } from "../../utils/type/TodoTodayItem/indes";
import TodayTodoItem from "../TodayTodoItem";

function Component(): JSX.Element {
  const todoTodayList = useRecoilValue(todayTodoListState);

  return (
    <>
      {todoTodayList.map((todoItem: TodoItem, index: number) => (
        <TodayTodoItem key={"i_" + index} todoItem={todoItem} />
      ))}
    </>
  );
}
export default Component;
