import React from "react";

import Link from "next/link";
import router from "next/router";

import * as S from "./style";

import { CourseItem, CourseItem as CourseItemType } from "../../../types/components-type/course";

import TagList from "../../Tag/TagList";
import { useRecoilValue } from "recoil";
import { isPermissionState, queryStringUserState } from "../../../states/app";
import Kebab from "../../../components/Kebab";
import { MenuItemType } from "../../../types/components-type/kebab";
import { deleteCourse } from "../../../libs/course";

type props = {
  courseItem: CourseItemType;
};

export default function CoursePinItem({ courseItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);

  function handleClickMenuItem(item: CourseItem) {
    (async () => {
      await deleteCourse(item.id);
      router.reload();
    })();
  }

  const menuItems: MenuItemType[] = [
    {
      showText: "삭제",
      onClick: () => {
        handleClickMenuItem(courseItem);
      },
    },
  ];

  return (
    <Link href={`/${queryStringUser.email}/${courseItem.id}`} passHref={true}>
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
          {isPermission && (
            <S.KebabBox>
              <Kebab menuItems={menuItems} />
            </S.KebabBox>
          )}
        </S.InfoBox>
      </S.Card>
    </Link>
  );
}
