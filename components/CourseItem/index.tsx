import { useState } from "react";

import useClick from "../../hooks/useClick";

import bigCheck from "../../assets/icons/bigCheck";
import bigDelete from "../../assets/icons/bigDelete";

import { default as S } from "./style";

import { CourseItem as CourseItemType } from "../../libs/type/CourseItem";

type props = {
  courseItem: CourseItemType;
};

function CourseItem({ courseItem }: props): JSX.Element {
  const [itemLeft, setItemLeft] = useState<number>(0);

  const refClickComponent = useClick(() => {
    if (itemLeft === 0) {
      setItemLeft(-120);
    } else {
      setItemLeft(0);
    }
  });

  return (
    <S.CourseItemSection>
      <S.Card ref={refClickComponent} left={itemLeft}>
        <S.CourseTitleSection>
          <S.CourseColor bgColor={courseItem.color} />
          <S.CourseTitle>{courseItem.title}</S.CourseTitle>
        </S.CourseTitleSection>
        <S.ContentSection>
          <S.Explaination>{courseItem.explaination}</S.Explaination>
          <S.Tags>{courseItem.tag_list}</S.Tags>
        </S.ContentSection>
      </S.Card>
      <S.ButtonSection>
        <S.EventButton>
          <S.Icon {...bigCheck}>
            <path d={bigCheck.d} />
          </S.Icon>
        </S.EventButton>
        <S.EventButton>
          <S.Icon {...bigDelete}>
            <path d={bigDelete.d} />
          </S.Icon>
        </S.EventButton>
      </S.ButtonSection>
    </S.CourseItemSection>
  );
}

export default CourseItem;
