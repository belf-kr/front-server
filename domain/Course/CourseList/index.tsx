import React, { useEffect, useState } from "react";

import Link from "next/link";

import * as S from "./style";

import CoursePinItem from "../CoursePinItem";

import { CourseItem } from "../../../types/components-type/course";

import { getCourses } from "../../../libs/course";
import Button from "../../../components/Button";
import BelfIcon from "../../../icons/BelfIcon";
import { useRecoilValue } from "recoil";
import { isPermissionState, isRefreshQueryState, queryStringUserState } from "../../../states/app";

export default function CourseList(): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);
  const isRefreshQuery = useRecoilValue(isRefreshQueryState);

  const [courseItems, setCourseItems] = useState<CourseItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getCourses(queryStringUser.id);
      setCourseItems(res);
    })();

    return () => setCourseItems([]);
  }, [queryStringUser, isRefreshQuery]);

  return (
    <>
      <S.TitleBox>
        <S.Title>코스 리스트</S.Title>
        {isPermission && (
          <Link href="/new-course" passHref={true}>
            <S.AddCourseButtonBox>
              <Button Icon={<BelfIcon fill={"fontMain"} />} text={"추가"} />
            </S.AddCourseButtonBox>
          </Link>
        )}
      </S.TitleBox>
      {courseItems.length === 0 ? (
        <a>코스를 생성해주세요.</a>
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
