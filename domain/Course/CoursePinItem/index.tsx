import React from "react";

import Link from "next/link";

import * as S from "./style";

import { CourseItem, CourseItem as CourseItemType } from "../../../types/components-type/course";

import TagList from "../../Tag/TagList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isPermissionState, isRefreshQueryState, queryStringUserState } from "../../../states/app";
import Kebab from "../../../components/Kebab";
import { MenuItemType } from "../../../types/components-type/kebab";
import { deleteCourse } from "../../../libs/course";

type props = {
  courseItem: CourseItemType;
};

export default function CoursePinItem({ courseItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);
  const setIsRefreshQueryState = useSetRecoilState(isRefreshQueryState);

  function handleClickMenuItem(item: CourseItem) {
    (async () => {
      await deleteCourse(item.id);
      setIsRefreshQueryState((prev) => !prev);
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
