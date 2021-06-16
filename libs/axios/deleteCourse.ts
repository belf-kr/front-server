import axios from "axios";

async function deleteCourse(courseId: number): Promise<void> {
  const config = {
    data: {
      id: courseId,
    },
  };
  await axios
    .delete("https://api-gateway.qa.belf.xyz/todo/delete-courses", config)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default deleteCourse;
