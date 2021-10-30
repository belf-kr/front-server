import React from "react";

import { NextPage } from "next";

import CreateLayout from "../../layouts/CreateLayout";
import CreateTodo from "../../domain/Todo/CreateTodo";

const NewTodoPage: NextPage = () => {
  return (
    <CreateLayout>
      <CreateTodo />
    </CreateLayout>
  );
};

export default NewTodoPage;
