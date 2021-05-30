// import axios from "axios";

import { CourseItem } from "../type/CourseItem";

import courseList from "../../data/courseList.json";

async function getCourseList(): Promise<CourseItem[]> {
  try {
    // const res = await axios.get("url");
    // const json: CourseItem[] = await res.data;
    const json: CourseItem[] = courseList.course_list;

    return json;
  } catch (e) {
    return [];
  }
}

export default getCourseList;
