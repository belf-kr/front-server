import axios from "axios";

import { TodoItem } from "../type/TodoTodayItem";

// import todayTodoList from "../../data/todayTodoList.json";

async function getTodayTodoList(): Promise<TodoItem[]> {
  try {
    const res = await axios.get("https://api-gateway.qa.belf.xyz/todo/today-todos");
    const json: TodoItem[] = await res.data.todo_list;

    // const json: TodoItem[] = todayTodoList.todo_list;

    return json;
  } catch (e) {
    return [];
  }
}

export default getTodayTodoList;
