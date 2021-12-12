import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import UserCheck from "../../../../../../components/QueryStringUser";

import CourseHeader from "../../../../../../domain/Course/Detail/CourseHeader";
import EditerMaster from "../../../../../../domain/Editer/EditerMaster";
import PostWorkDoneLayout from "../../../../../../layouts/PostWorkDoneLayout";
import { getCourse } from "../../../../../../libs/course";
import { getTodo } from "../../../../../../libs/todo";
import { queryStringUserState } from "../../../../../../states/app";
import { CourseItem } from "../../../../../../types/components-type/course";
import { TodoItem } from "../../../../../../types/components-type/todo";

const WriteWorkDonePage: NextPage = () => {
  const [currentCourse, setCurrentCourse] = useState<CourseItem>({});
  const [currentWorkTodo, setCurrentWorkTodo] = useState<TodoItem>({});

  const router = useRouter();
  const queryStringUser = useRecoilValue(queryStringUserState);

  useEffect(() => {
    if (queryStringUser === undefined) {
      return;
    }
    (async () => {
      const resCourse = await getCourse(parseInt(router.query?.courseId as string, 10));
      setCurrentCourse(resCourse[0]);

      const resTodo = await getTodo(parseInt(router.query?.todoId as string, 10));
      setCurrentWorkTodo(resTodo[0]);
    })();

    return () => setCurrentCourse({});
  }, [queryStringUser]);

  return (
    <UserCheck>
      <PostWorkDoneLayout>
        <CourseHeader courseItem={currentCourse} />
        <EditerMaster todoItem={currentWorkTodo} />
      </PostWorkDoneLayout>
    </UserCheck>
  );
};

export default WriteWorkDonePage;
