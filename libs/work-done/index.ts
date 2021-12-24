import { apiGatewayClient } from "../api-client";

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
    await apiGatewayClient.post<WorkDone>(`/todo/work-dones`, workDone, {
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
  const { data } = await apiGatewayClient.get<DoneItem>(`/todo/work-dones/${doneId}`);
  return data;
}

export async function getDones(courseId?: number): Promise<DoneItem[]> {
  const { data } = await apiGatewayClient.get<DoneItem[]>("/todo/work-dones", {
    params: {
      courseId: courseId,
    },
  });
  return data;
}

export async function deleteDone(id: number): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiGatewayClient.delete(`/todo/work-Dones/${id}`, {
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
            // 재시도: 리프레쉬 토큰으로 엑세스 토큰을 다시 발급
            await TokenRefresh();
            return await work();
        }
      }
    }
    throw new Error("deleteDone() 에러");
  }
}
