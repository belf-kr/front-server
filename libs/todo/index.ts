import { apiClient } from "../api-client";

import { TodoItem } from "../../types/components-type/todo";
import { getLocalStorageAccessToken, TokenRefresh } from "../oauth";
import axios from "axios";

export async function getTodayTodos(userId?: number, courseId?: number, activeDate?: string, maximumActiveDate?: string): Promise<TodoItem[]> {
  const queryString = [
    userId && `userId=${userId}`,
    courseId && `courseId=${courseId}`,
    activeDate && `activeDate=${activeDate}`,
    maximumActiveDate && `maximumActiveDate=${maximumActiveDate}`,
  ];
  const { data } = await apiClient.get<TodoItem[]>(`/work-todos?` + queryString.join("&"));
  return data;
}

export async function postNewTodo(todo: TodoItem): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiClient.post<TodoItem>(`/work-todos`, todo, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
  }
  try {
    return await work();
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            // 재시도: 리프레쉬 토큰으로 엑세스 토큰을 다시 발급
            await TokenRefresh();
            return await work();
        }
      }
    }
    throw new Error("postNewTodo() 에러");
  }
}
