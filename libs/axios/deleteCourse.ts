import axios from "axios";

async function deleteCourse(courseId: number): Promise<void> {
  await axios
    .delete("https://api-gateway.qa.belf.xyz/todo/courses/" + courseId)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default deleteCourse;
