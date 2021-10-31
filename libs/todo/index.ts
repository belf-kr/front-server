import { client } from "../api-client";

import { TodoItem } from "../../types/components-type/todo";

export async function getTodayTodos(): Promise<TodoItem[]> {
  const { data } = await client.get<TodoItem[]>(`/work-todos`);
  return data;
}

export async function postNewTodo(todo: TodoItem): Promise<void> {
  await client.post<TodoItem>(`/work-todos`, todo);
}
