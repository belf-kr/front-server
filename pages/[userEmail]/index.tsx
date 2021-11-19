import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import type { NextPage } from "next";
import { userInfoState, isPermissionState } from "../../states/app";
import UserLayout from "../../layouts/UserLayout";
import UserContentsLayout from "../../layouts/UserContentsLayout";

import UserProfile from "../../domain/UserPage/UserProfile";
import UserPageNavigate from "../../domain/UserPage/UserPageNavigate";
import CoursePinList from "../../domain/Course/CoursePinList";
import PlantingGlass from "../../domain/Status/PlantingGlass";
import TodayTodoList from "../../domain/Todo/TodayTodoList";
import CourseList from "../../domain/Course/CourseList";

import useGetString from "../../hooks/useGetString";
import { GetUserInfoEmailQuey, GetUserInfoTokenQuey } from "../../libs/oauth";
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
  const setIsPermissionState = useSetRecoilState(isPermissionState);

  const [tabKey, setTabKey] = useGetString();

  const router = useRouter();
  const { userEmail } = router.query;

  useEffect(() => {
    if (userEmail === undefined) {
      return;
    }
    (async () => {
      try {
        const userInfo = await GetUserInfoEmailQuey(userEmail as string);
        setUserInfo(userInfo);
        try {
          const verifiedUser = await GetUserInfoTokenQuey();
          if (userInfo.email === verifiedUser.email) {
            setIsPermissionState(true);
          }
        } catch (error) {
          // 어떤 오류던 간에 token 기반 사용자 인증에 실패하면 권한이 없는 것으로 간주합니다.
        }
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
