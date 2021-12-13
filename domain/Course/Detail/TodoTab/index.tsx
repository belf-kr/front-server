import React from "react";
import useGetDate from "../../../../hooks/useGetDate";
import ChoiceDate from "../ChoiceDate";
import TodoList from "../TodoList";

export default function TodoTab(): JSX.Element {
  const [currentDate, setCurrentDate] = useGetDate();
  return (
    <>
      <ChoiceDate setChoiceDate={setCurrentDate} />
      <TodoList currentDate={currentDate} />
    </>
  );
}
