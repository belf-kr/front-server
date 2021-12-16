import React, { useEffect, useState } from "react";

import * as S from "./style";

import CoursePinItem from "../CoursePinItem";

import { CourseItem } from "../../../types/components-type/course";

import { getCourses } from "../../../libs/course";
import { useRecoilValue } from "recoil";
import { queryStringUserState } from "../../../states/app";

export default function BelfList(): JSX.Element {
  const [courseItems, setCourseItems] = useState<CourseItem[]>([]);

  const queryStringUser = useRecoilValue(queryStringUserState);

  useEffect(() => {
    (async () => {
      const res = await getCourses(queryStringUser.id, undefined, true);
      setCourseItems(res);
    })();

    return () => setCourseItems([]);
  }, []);

  return (
    <>
      <S.TitleBox>
        <S.Title>Belf 리스트</S.Title>
      </S.TitleBox>
      {courseItems.length === 0 ? (
        <a>Belf 한 코스가 없습니다.</a>
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
