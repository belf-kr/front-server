import React from "react";

import * as S from "./style";

import { CourseItem as CourseItemType } from "../../../types/components-type/course";

import TagList from "../../Tag/TagList";
import ArrowIcon from "../../../icons/ArrowIcon";

type props = {
  courseItem: CourseItemType;
};

export default function CoursePinItem({ courseItem }: props): JSX.Element {
  return (
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
        <S.ArrowBox>
          <ArrowIcon />
        </S.ArrowBox>
      </S.InfoBox>
    </S.Card>
  );
}
