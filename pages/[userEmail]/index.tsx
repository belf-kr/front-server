import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import type { NextPage } from "next";
import { userInfoState } from "../../states/app";
import UserLayout from "../../layouts/UserLayout";
import UserContentsLayout from "../../layouts/UserContentsLayout";

import UserProfile from "../../domain/UserPage/UserProfile";
import UserPageNavigate from "../../domain/UserPage/UserPageNavigate";
import CoursePinList from "../../domain/Course/CoursePinList";
import PlantingGlass from "../../domain/Status/PlantingGlass";
import TodayTodoList from "../../domain/Todo/TodayTodoList";
import CourseList from "../../domain/Course/CourseList";

import useGetString from "../../hooks/useGetString";
import { GetUserInfo } from "../../libs/oauth";
import { useRouter } from "next/router";
import axios from "axios";

const getTabComponent = (key: string) => {
  switch (key) {
    case "todayTodo":
      return <TodayTodoList />;
    case "courseList":
      return <CourseList />;
    case "belfList":
      return <CourseList />;
    default:
      return (
        <>
          <CoursePinList />
          <PlantingGlass />
          <TodayTodoList />
        </>
      );
  }
};

const UserPage: NextPage = () => {
  const [error, setError] = useState<string>();
  const [isNotFoundUser, setIsNotFoundUser] = useState<boolean>();

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [tabKey, setTabKey] = useGetString();

  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (userId === undefined) {
      return;
    }
    (async () => {
      try {
        const res = await GetUserInfo(userId as string);
        setUserInfo(res);
      } catch (error) {
        if (error instanceof Error) {
          if (axios.isAxiosError(error)) {
            switch (error.response?.status) {
              case 404:
                setIsNotFoundUser(true);
                break;
            }
          }
          setError(error.message);
          return;
        }
        setError(error);
      }
    })();
  }, [router]);

  if (isNotFoundUser) {
    return (
      <>
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <h3>앗! 존재하지 않는 사용자 입니다.</h3>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

  if (userInfo) {
    return (
      <UserLayout>
        <UserProfile />
        <UserContentsLayout>
          <UserPageNavigate setTabKey={setTabKey} />
          {getTabComponent(tabKey)}
        </UserContentsLayout>
      </UserLayout>
    );
  }

  return (
    <>
      <h3>로딩 중...</h3>
    </>
  );
};

export default UserPage;
