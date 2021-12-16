import React from "react";
import type { NextPage } from "next";

import UserLayout from "../../layouts/UserLayout";
import UserContentsLayout from "../../layouts/UserContentsLayout";

import UserProfile from "../../domain/UserPage/UserProfile";
import UserPageNavigate from "../../domain/UserPage/UserPageNavigate";
import CoursePinList from "../../domain/Course/CoursePinList";
import TodayTodoList from "../../domain/Todo/TodayTodoList";
import CourseList from "../../domain/Course/CourseList";

import useGetString from "../../hooks/useGetString";
import UserCheck from "../../components/QueryStringUser";
import BelfList from "../../domain/Course/BelfList";

const getTabComponent = (key: string) => {
  switch (key) {
    case "todayTodo":
      return <TodayTodoList />;
    case "courseList":
      return <CourseList />;
    case "belfList":
      return <BelfList />;
    default:
      return (
        <>
          <CoursePinList />
          <TodayTodoList />
        </>
      );
  }
};

const UserPage: NextPage = () => {
  const [tabKey, setTabKey] = useGetString();

  return (
    <UserCheck>
      <UserLayout>
        <UserProfile />
        <UserContentsLayout>
          <UserPageNavigate setTabKey={setTabKey} />
          {getTabComponent(tabKey)}
        </UserContentsLayout>
      </UserLayout>
    </UserCheck>
  );
};

export default UserPage;
