import { apiClient } from "../api-client";
import { CourseItem } from "../../types/components-type/course";
import { getLocalStorageAccessToken, TokenRefresh } from "../oauth";
import axios from "axios";

export async function postNewCourse(course: CourseItem): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiClient.post(`/courses`, course, {
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

export async function getCourses(userId?: number, courseId?: number): Promise<CourseItem[]> {
  const queryString = [userId && `userId=${userId}`, courseId && `courseId=${courseId}`];
  const { data } = await apiClient.get<CourseItem[]>(`/courses?` + queryString.join("&"));
  return data;
}

export async function getCourse(courseId: number): Promise<CourseItem[]> {
  const { data } = await apiClient.get<CourseItem[]>(`/courses/${courseId}`);
  return data;
}

export async function deleteCourse(courseId: number): Promise<void> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    await apiClient.delete(`/courses/${courseId}`, {
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
    await apiClient.post(
      `/courses`,
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
