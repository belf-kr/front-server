import { apiClient } from "../api-client";

import { CourseItem } from "../../types/components-type/course";

export async function postNewCourse(course: CourseItem): Promise<void> {
  await apiClient.post(`/courses`, course);
}

export async function getCourses(): Promise<CourseItem[]> {
  const { data } = await apiClient.get<CourseItem[]>(`/courses`);
  return data;
}

export async function deleteCourse(id: number): Promise<void> {
  await apiClient.delete(`/courses`, { data: { id } });
}
