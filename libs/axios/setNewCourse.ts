import axios from "axios";
import { CourseItem } from "../type/CourseItem";

// import todayTodoList from "../../data/todayTodoList.json";

async function setNewCourse(course: CourseItem): Promise<void> {
  await axios
    .post("https://api-gateway.qa.belf.xyz/todo/courses", course)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default setNewCourse;
