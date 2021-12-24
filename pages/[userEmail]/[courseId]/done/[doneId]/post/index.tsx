import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import React, { useState } from "react";

import UserCheck from "../../../../../../components/QueryStringUser";

import { CourseItem } from "../../../../../../types/components-type/course";
import { DoneItem } from "../../../../../../types/components-type/todo";

import { getCourse } from "../../../../../../libs/course";
import { getDone } from "../../../../../../libs/work-done";

import CourseHeader from "../../../../../../domain/Course/Detail/CourseHeader";
import PostWorkDoneLayout from "../../../../../../layouts/PostWorkDoneLayout";
import { EditNode } from "../../../../../../types/components-type/editer";
import PostMaster from "../../../../../../domain/Editer/PostMaster";

const PostWorkDonePage: NextPage = ({ currentCourse, currentDone }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [course] = useState<CourseItem>(currentCourse);
  const [done] = useState<DoneItem>(currentDone);

  return (
    <UserCheck>
      <PostWorkDoneLayout>
        <CourseHeader courseItem={course} />
        <PostMaster postDoneItem={done} />
      </PostWorkDoneLayout>
    </UserCheck>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const serviceRunningInDocker = process.env.SERVICE_RUNNING_IN_DOCKER === "true";

  const resCourse = await getCourse(parseInt(params?.courseId as string, 10), serviceRunningInDocker);
  const resDone = await getDone(parseInt(params?.doneId as string, 10), serviceRunningInDocker);
  const content: EditNode[] = JSON.parse((resDone.content as unknown) as string);
  resDone.content = content;

  return { props: { currentCourse: resCourse[0], currentDone: resDone } };
};

export default PostWorkDonePage;
