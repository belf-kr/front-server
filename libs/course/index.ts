import { client } from "../api-client";

import { CourseItem } from "../../types/components-type/course";

export async function postNewCourse(course: CourseItem): Promise<void> {
  await client.post(`/courses`, course);
}

export async function getCourses(): Promise<CourseItem[]> {
  const { data } = await client.get<CourseItem[]>(`/courses`);
  return data;
}

export async function deleteCourse(id: number): Promise<void> {
  await client.delete(`/courses`, { data: { id } });
}
