import { atom, selector } from "recoil";
import getTodayTodoList from "../../libs/axios/getTodayTodoList";
import { TodoItem } from "../../libs/type/TodoTodayItem/indes";

export const todayTodoListState = atom<TodoItem[]>({
  key: "todayTodoListState",
  default: selector({
    key: "todayTodoListState/default",
    get: async () => {
      return await getTodayTodoList();
    },
  }),
});
