import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import useGetString from "../../../hooks/useGetString";

import DetailLayout from "../../../layouts/DetailLayout";

import CourseHeader from "../../../domain/Course/Detail/CourseHeader";
import ExplanationTextArea from "../../../domain/Course/Detail/ExplanationTextArea";
import CourseDetailNavigate from "../../../domain/Course/Detail/CourseDetailNavigate";
import UserCheck from "../../../components/UserCheck";
import TodoTab from "../../../domain/Course/Detail/TodoTab";
import { userInfoState } from "../../../states/app";
import { useRecoilValue } from "recoil";
import { getCourses } from "../../../libs/course";
import { useRouter } from "next/router";
import { CourseItem } from "../../../types/components-type/course";

const getTabComponent = (key: string) => {
  switch (key) {
    case "todo":
      return <TodoTab />;
    case "doneTodoList":
      return <></>;
    case "repeatList":
      return <></>;
  }
};

const CourseDetailPage: NextPage = () => {
  const [tabKey, setTabKey] = useGetString();
  const [currentCourse, setCurrentCourse] = useState<CourseItem>({});

  const router = useRouter();

  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    if (userInfo === undefined) {
      return;
    }
    (async () => {
      const res = await getCourses(userInfo.id, parseInt(router.query?.courseId as string, 10));
      setCurrentCourse(res[0]);
    })();

    return () => setCurrentCourse({});
  }, [userInfo]);

  return (
    <UserCheck>
      <DetailLayout>
        <CourseHeader courseItem={currentCourse} />
        <ExplanationTextArea explanation={currentCourse.explanation} />
        <CourseDetailNavigate setTabKey={setTabKey} />
        {getTabComponent(tabKey)}
      </DetailLayout>
    </UserCheck>
  );
};

export default CourseDetailPage;
