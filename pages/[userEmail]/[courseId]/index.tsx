import React from "react";
import { NextPage } from "next";

import useGetString from "../../../hooks/useGetString";

import DetailLayout from "../../../layouts/DetailLayout";

import CourseHeader from "../../../domain/Course/Detail/CourseHeader";
import ExplanationTextArea from "../../../domain/Course/Detail/ExplanationTextArea";
import CourseDetailNavigate from "../../../domain/Course/Detail/CourseDetailNavigate";
import ChoiceDate from "../../../domain/Course/Detail/ChoiceDate";
import TodoList from "../../../domain/Course/Detail/TodoList";
import UserCheck from "../../../components/UserCheck";

const getTabComponent = (key: string) => {
  switch (key) {
    case "todo":
      return (
        <>
          <ChoiceDate />
          <TodoList isDoneTodo={false} />
          {/* <TodoList isDoneTodo={true} /> */}
        </>
      );
    case "doneTodoList":
      return (
        <>
          <TodoList isDoneTodo={true} />
        </>
      );
    case "repeatList":
      return (
        <>
          <TodoList isDoneTodo={false} />
          <TodoList isDoneTodo={true} />
        </>
      );
  }
};

const CourseDetailPage: NextPage = () => {
  const [tabKey, setTabKey] = useGetString();

  return (
    <UserCheck>
      <DetailLayout>
        <CourseHeader />
        <ExplanationTextArea explanation={"테스트 설명 입니다."} />
        <CourseDetailNavigate setTabKey={setTabKey} />
        {getTabComponent(tabKey)}
      </DetailLayout>
    </UserCheck>
  );
};

export default CourseDetailPage;
