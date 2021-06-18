import axios from "axios";

async function deleteTodo(todoId: number): Promise<void> {
  const config = {
    data: {
      id: todoId,
    },
  };
  await axios
    .delete("https://api-gateway.qa.belf.xyz/todo/delete-work-todo", config)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response);
    });
}

export default deleteTodo;
