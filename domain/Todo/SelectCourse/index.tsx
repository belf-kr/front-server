import { useEffect, useRef, useState } from "react";

import * as S from "./style";

import { getCourses } from "../../../libs/course";

import { CourseItem } from "../../../types/components-type/course";

import ArrowIcon from "../../../icons/ArrowIcon";

type props = {
  courseOnChange: (value: CourseItem) => void;
};

export default function SelectCourse({ courseOnChange }: props): JSX.Element {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [courseItems, setCourseItems] = useState<CourseItem[]>([]);
  const [currentCourseItem, setCurrentCourseItem] = useState<CourseItem>();
  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: any) => {
    if (modalEl.current) {
      if (!modalEl.current?.contains(target)) {
        setIsOpenPopup(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getCourses();
      setCourseItems(res);
      return () => setCourseItems([]);
    })();
  }, []);

  useEffect(() => {
    courseOnChange(currentCourseItem);
  }, [currentCourseItem]);

  return (
    <S.SelectCourseBox ref={modalEl}>
      <S.SelectCourseInfoBox
        onClick={() => {
          setIsOpenPopup(!isOpenPopup);
        }}
      >
        <S.TitleLabel>코스</S.TitleLabel>
        <S.CourseLabelBox>
          <S.CourseColor color={currentCourseItem?.color} />
          <S.CourseLabel>{currentCourseItem?.title}</S.CourseLabel>
        </S.CourseLabelBox>
        <S.IconBox isOpen={isOpenPopup}>
          <ArrowIcon size={"x2Small"} />
        </S.IconBox>
      </S.SelectCourseInfoBox>
      <S.CourseListBox isOpen={isOpenPopup}>
        {courseItems.map((courseItem, index) => {
          return (
            <S.BottomBorderBox
              key={index}
              onClick={() => {
                setCurrentCourseItem(courseItem);
                setIsOpenPopup(false);
              }}
              isLast={courseItems.length - 1 === index}
            >
              <S.CourseItemBox>
                <S.CourseColor color={courseItem.color} />
                <S.CourseLabel>{courseItem.title}</S.CourseLabel>
              </S.CourseItemBox>
            </S.BottomBorderBox>
          );
        })}
      </S.CourseListBox>
    </S.SelectCourseBox>
  );
}
