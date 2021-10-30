import axios from "axios";

import { TodoItem } from "../type/TodoTodayItem";

async function getTodayTodoList(): Promise<TodoItem[]> {
  return await axios
    .get("https://api-gateway.qa.belf.xyz/todo/work-todos")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
      return [];
    })
    .finally(() => {
      return [];
    });
}

export default getTodayTodoList;
