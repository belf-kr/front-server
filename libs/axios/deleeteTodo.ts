import axios from "axios";

async function deleteTodo(todoId: number): Promise<void> {
  await axios
    .delete("https://api-gateway.qa.belf.xyz/API/todo/work-todos/" + todoId)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default deleteTodo;
