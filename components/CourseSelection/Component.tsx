import { useState } from "react";

import { default as S } from "./style";

import { CourseItem as CourseItemType } from "../../libs/type/CourseItem";
import nomalRightArrow from "../../assets/icons/nomalRightArrow";

type props = {
  courseList: CourseItemType[];
};

function Component({ courseList }: props): JSX.Element {
  const [selectedCourse, setSelectedCourse] = useState<CourseItemType>(courseList[0]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Frame>
      <S.CourseCardButton onClick={() => setIsOpen(!isOpen)}>
        <div>Course</div>
        <div>
          <S.SelectedCourse>
            <S.CourseColor bgColor={selectedCourse.color} />
            <S.CourseTitle>{selectedCourse.title}</S.CourseTitle>
          </S.SelectedCourse>
        </div>
        <S.CourseCardIcon isOpen={isOpen}>
          <S.Icon {...nomalRightArrow}>
            <path d={nomalRightArrow.d} />
          </S.Icon>
        </S.CourseCardIcon>
      </S.CourseCardButton>
      <S.CourseItemList isOpen={isOpen}>
        {courseList.map((courseItem: CourseItemType, index: number) => (
          <S.CourseItem
            key={index}
            onClick={() => {
              setSelectedCourse(courseItem);
              setIsOpen(!isOpen);
            }}
          >
            <S.CourseColor bgColor={courseItem.color} />
            <S.CourseTitle>{courseItem.title}</S.CourseTitle>
          </S.CourseItem>
        ))}
      </S.CourseItemList>
    </S.Frame>
  );
}
export default Component;
