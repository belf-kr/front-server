import { useRecoilValueLoadable } from "recoil";

import { getTodayTodoListSelector } from "../../states/TodayTodoList";

import Component from "./Component";

function TodayTodoList(): JSX.Element {
  const con = useRecoilValueLoadable(getTodayTodoListSelector);
  switch (con.state) {
    case "hasValue":
      return <Component />;
    case "loading":
      return <>loading...</>;
    case "hasError":
      return <>error...</>;
  }
}

export default TodayTodoList;
