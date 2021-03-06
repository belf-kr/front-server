import React from "react";

import * as S from "./style";

import Link from "next/link";

import { CourseItem as CourseItemType } from "../../../types/components-type/course";

import TagList from "../../Tag/TagList";

type props = {
  courseItem: CourseItemType;
};

export default function SearchCourseItem({ courseItem }: props): JSX.Element {
  return (
    <Link href={`/${courseItem.userEmail}/${courseItem.id}`}>
      <S.Card>
        <S.Color backgroundColor={courseItem.color} />
        <S.InfoBox>
          <S.RowBox>
            <S.Title>{courseItem.title}</S.Title>
          </S.RowBox>
          <S.RowBox>
            <S.Explanation>{courseItem.explanation}</S.Explanation>
          </S.RowBox>
          <S.RowBox>
            <TagList tagList={courseItem.tags} />
          </S.RowBox>
          <S.RowBox>
            <S.UserId>{courseItem.userEmail}</S.UserId>
          </S.RowBox>
        </S.InfoBox>
      </S.Card>
    </Link>
  );
}
