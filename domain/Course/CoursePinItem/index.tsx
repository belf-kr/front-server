import React from "react";

import * as S from "./style";

import { CourseItem as CourseItemType } from "../../../types/components-type/course";

import TagList from "../../Tag/TagList";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../states/app";
import Link from "next/link";
import Kebab from "../../../components/Kebab";
import { MenuItemType } from "../../../types/components-type/kebab";

type props = {
  courseItem: CourseItemType;
  menuItems?: MenuItemType[];
};

export default function CoursePinItem({ courseItem, menuItems }: props): JSX.Element {
  const userInfo = useRecoilValue(userInfoState);
  return (
    <Link href={`/${userInfo.email}/${courseItem.id}`} passHref={true}>
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
          <S.KebabBox>
            <Kebab menuItems={menuItems} />
          </S.KebabBox>
        </S.InfoBox>
      </S.Card>
    </Link>
  );
}
