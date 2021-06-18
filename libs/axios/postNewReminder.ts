import axios from "axios";
import Reminder from "../type/Reminder";

async function setNewCourse(reminder: Reminder): Promise<void> {
  console.log(reminder);
  await axios
    .post("https://api-gateway.qa.belf.xyz/todo/create-work-todo", reminder)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default setNewCourse;
