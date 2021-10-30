import axios from "axios";

import { CourseItem } from "../type/CourseItem";

async function getCourseList(): Promise<CourseItem[]> {
  return await axios
    .get("https://api-gateway.qa.belf.xyz/todo/courses")
    .then((res) => {
      return res.data.course_list;
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
      return [];
    })
    .finally(() => {
      return [];
    });
}

export default getCourseList;
