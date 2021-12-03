import { apiClient } from "../api-client";

import { getLocalStorageAccessToken, TokenRefresh } from "../oauth";
import axios from "axios";
import { DoneItem } from "../../types/components-type/todo";

type WorkDone = {
  workTodoId: number;
  title: string;
  content: string;
  userId: number;
};

export async function postWorkDone(workDone: WorkDone): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiClient.post<WorkDone>(`/work-dones`, workDone, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
            await TokenRefresh();
            return await work();
        }
      }
    }
    throw new Error("postWorkDone() 에러");
  }
}

export async function getDone(doneId: number): Promise<DoneItem> {
  const { data } = await apiClient.get<DoneItem>(`/work-dones/${doneId}`);
  return data;
}

export async function getDones(courseId?: number): Promise<DoneItem[]> {
  const queryString = [courseId && `courseId=${courseId}`];
  const { data } = await apiClient.get<DoneItem[]>(`/work-dones?${queryString.join("&")}`);
  return data;
}
