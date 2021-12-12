import React from "react";

import * as S from "./style";

import { CourseItem } from "../../../types/components-type/course";
import SearchCourseItem from "../SearchCourseItem";

type props = {
  courseList: CourseItem[];
};

export default function SearchCourseList({ courseList }: props): JSX.Element {
  return (
    <>
      {courseList.length === 0 ? (
        <a>조회된 코스가 없습니다.</a>
      ) : (
        <S.CourseListBox>
          {courseList.map((courseItem, i) => (
            <SearchCourseItem key={i} courseItem={courseItem} />
          ))}
        </S.CourseListBox>
      )}
    </>
  );
}
