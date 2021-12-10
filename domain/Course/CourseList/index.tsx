import React, { useEffect, useState } from "react";

import Link from "next/link";

import * as S from "./style";

import CoursePinItem from "../CoursePinItem";

import { CourseItem } from "../../../types/components-type/course";

import { getCourses } from "../../../libs/course";
import Button from "../../../components/Button";
import BelfIcon from "../../../icons/BelfIcon";
import { useRecoilValue } from "recoil";
import { isPermissionState, userInfoState } from "../../../states/app";

export default function CourseList(): JSX.Element {
  const [courseItems, setCourseItems] = useState<CourseItem[]>([]);

  const userInfo = useRecoilValue(userInfoState);
  const isPermission = useRecoilValue(isPermissionState);

  useEffect(() => {
    (async () => {
      const res = await getCourses(userInfo.id);
      setCourseItems(res);
    })();

    return () => setCourseItems([]);
  }, []);

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
