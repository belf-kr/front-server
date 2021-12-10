import React, { useEffect, useState } from "react";

import * as S from "./style";

import CoursePinItem from "../CoursePinItem";

import { CourseItem } from "../../../types/components-type/course";

import { getCourses } from "../../../libs/course";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../states/app";

export default function CoursePinList(): JSX.Element {
  const [courseItems, setCourseItems] = useState<CourseItem[]>([]);

  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    (async () => {
      const res = await getCourses(userInfo.id);
      setCourseItems(res.reverse().slice(0, 4));
    })();
    return () => setCourseItems([]);
  }, []);

  return (
    <>
      <S.TitleBox>
        <S.Title>코스 리스트</S.Title>
      </S.TitleBox>
      {courseItems.length === 0 ? (
        <a>코스를 생성해주세요</a>
      ) : (
        <S.CourseListBox>
          {courseItems.map((courseItem, i) => (
            <CoursePinItem key={i} courseItem={courseItem} />
          ))}
        </S.CourseListBox>
      )}
    </>
  );
}
