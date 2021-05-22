import { selector } from "recoil";

import getTodayTodoList from "../../libs/axios/getTodayTodoList";

export const getTodayTodoListSelector = selector({
  key: "getTodayTodoListSelector",
  get: async () => {
    return await getTodayTodoList();
  },
});
