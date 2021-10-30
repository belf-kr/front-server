import { client } from "../api-client";

import { CourseItem } from "../../types/components-type/course";

export async function postCourse(course: CourseItem) {
  await client.post(`/courses`, course);
}

export async function getCourses(): Promise<CourseItem[]> {
  const { data } = await client.get<CourseItem[]>(`/courses`);
  return data;
}

export async function deleteCourse(id: number) {
  await client.delete(`/courses`, { data: { id } });
}
