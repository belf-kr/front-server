import { useEffect, useState } from "react";

import getTodayTodoList from "../../libs/axios/getTodayTodoList";

import Component from "./Component";

function TodayTodoList(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<>Loading...</>);

  useEffect(() => {
    getTodayTodoList()
      .then((res) => {
        setComponent(<Component todoList={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default TodayTodoList;
