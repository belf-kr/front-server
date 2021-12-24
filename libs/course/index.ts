import { apiGatewayClient } from "../api-client";
import { CourseItem } from "../../types/components-type/course";
import { getLocalStorageAccessToken, TokenRefresh } from "../oauth";
import axios from "axios";

export async function postNewCourse(course: CourseItem): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiGatewayClient.post(`/todo/courses`, course, {
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
    throw new Error("postNewCourse() 에러");
  }
}

export async function getCourses(userId?: number, courseId?: number, belfOnly?: boolean): Promise<CourseItem[]> {
  const { data } = await apiGatewayClient.get<CourseItem[]>(`/todo/courses`, {
    params: {
      userId: userId,
      courseId: courseId,
      belfOnly: belfOnly,
    },
  });
  return data;
}

export async function getCourse(courseId: number): Promise<CourseItem[]> {
  const { data } = await apiGatewayClient.get<CourseItem[]>(`/todo/courses/${courseId}`);
  return data;
}

export async function deleteCourse(courseId: number): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiGatewayClient.delete(`/todo/courses/${courseId}`, {
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
    throw new Error("deleteCourse() 에러");
  }
}

export async function postBelfCourse(courseId: number): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiGatewayClient.post(
      `/todo/courses`,
      { originalCourseId: courseId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
    throw new Error("postBelfCourse() 에러");
  }
}

export async function getSearchCourses(keyword: string): Promise<CourseItem[]> {
  const { data } = await apiGatewayClient.get<CourseItem[]>(`/todo/courses/search?keyword=${encodeURI(keyword)}`);
  return data;
}
