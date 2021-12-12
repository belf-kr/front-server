import React from "react";

import { NextPage } from "next";

import CreateLayout from "../../layouts/CreateLayout";
import CreateTodo from "../../domain/Todo/CreateTodo";
import UserCheck from "../../components/QueryStringUser";

const NewTodoPage: NextPage = () => {
  return (
    <UserCheck>
      <CreateLayout>
        <CreateTodo />
      </CreateLayout>
    </UserCheck>
  );
};

export default NewTodoPage;
