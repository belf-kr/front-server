import { atom, selector } from "recoil";
import getTodayTodoList from "../../utils/axios/getTodayTodoList";
import { TodoItem } from "../../utils/type/TodoTodayItem/indes";

export const todayTodoListState = atom<TodoItem[]>({
  key: "todayTodoListState",
  default: selector({
    key: "todayTodoListState/default",
    get: async () => {
      return await getTodayTodoList();
    },
  }),
});