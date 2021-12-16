import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import useGetString from "../../../hooks/useGetString";

import DetailLayout from "../../../layouts/DetailLayout";

import CourseHeader from "../../../domain/Course/Detail/CourseHeader";
import ExplanationTextArea from "../../../domain/Course/Detail/ExplanationTextArea";
import CourseDetailNavigate from "../../../domain/Course/Detail/CourseDetailNavigate";
import QueryStringUser from "../../../components/QueryStringUser";
import TodoTab from "../../../domain/Course/Detail/TodoTab";
import { queryStringUserState } from "../../../states/app";
import { useRecoilValue } from "recoil";
import { getCourse } from "../../../libs/course";
import { useRouter } from "next/router";
import { CourseItem } from "../../../types/components-type/course";
import DoneTab from "../../../domain/Course/Detail/DoneTab";

const getTabComponent = (key: string) => {
  switch (key) {
    case "todo":
      return <TodoTab />;
    case "doneTodoList":
      return <DoneTab />;
    case "repeatList":
      return <></>;
  }
};

const CourseDetailPage: NextPage = () => {
  const [tabKey, setTabKey] = useGetString();
  const [currentCourse, setCurrentCourse] = useState<CourseItem>({});

  const router = useRouter();

  const queryStringUser = useRecoilValue(queryStringUserState);

  useEffect(() => {
    if (queryStringUser === undefined) {
      return;
    }
    (async () => {
      const res = await getCourse(parseInt(router.query?.courseId as string, 10));
      setCurrentCourse(res[0]);
    })();

    return () => setCurrentCourse({});
  }, [queryStringUser]);

  return (
    <QueryStringUser>
      <DetailLayout>
        <CourseHeader courseItem={currentCourse} />
        <ExplanationTextArea explanation={currentCourse.explanation} />
        <CourseDetailNavigate setTabKey={setTabKey} />
        {getTabComponent(tabKey)}
      </DetailLayout>
    </QueryStringUser>
  );
};

export default CourseDetailPage;
