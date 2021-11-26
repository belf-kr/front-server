import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import UserCheck from "../../../../../components/UserCheck";

import CourseHeader from "../../../../../domain/Course/Detail/CourseHeader";
import EditerMaster from "../../../../../domain/Editer/EditerMaster";
import PostWorkDoneLayout from "../../../../../layouts/PostWorkDoneLayout";
import { getCourses } from "../../../../../libs/course";
import { userInfoState } from "../../../../../states/app";
import { CourseItem } from "../../../../../types/components-type/course";

const PostWorkDonePage: NextPage = () => {
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
      <PostWorkDoneLayout>
        <CourseHeader courseItem={currentCourse} />
        <EditerMaster />
      </PostWorkDoneLayout>
    </UserCheck>
  );
};

export default PostWorkDonePage;
