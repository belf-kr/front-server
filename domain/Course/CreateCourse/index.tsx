import React, { FormEvent, useEffect, useState } from "react";

import * as S from "./style";

import { getColors } from "../../../libs/colors";

import TagInput from "../../Tag/TagInput";
import Button from "../../../components/Button";

export default function CreateCourse(): JSX.Element {
  const [courseColors, setCourseColors] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getColors();
      setCourseColors(res);
    })();
    return () => setCourseColors([]);
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <S.TitleBox>
        <S.Title>새로운 코스 추가</S.Title>
      </S.TitleBox>
      <form onSubmit={handleSubmit}>
        <S.Contents>
          <S.SubTitleBox>
            <S.SubTitle>코스 색상 선택</S.SubTitle>
          </S.SubTitleBox>
          <S.RadioColorsBox>
            {courseColors.map((color, index) => {
              return <S.ColorInput type="radio" color={color} value={color} name="color" key={index} defaultChecked={index === 0 ? true : false} />;
            })}
          </S.RadioColorsBox>
          <S.SubTitleBox>
            <S.SubTitle>코스 제목</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultInput type="text" placeholder="입력해주세요" name="title" />
          <S.SubTitleBox>
            <S.SubTitle>설명</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultTextArea placeholder="입력해주세요 (200자)" name="explanation" rows={6} maxLength={200} />
          <S.SubTitleBox>
            <S.SubTitle>태그</S.SubTitle>
          </S.SubTitleBox>
          <TagInput />
          <S.SubmitButtonBox>
            <Button type={"submit"} text={"코스 생성"} />
          </S.SubmitButtonBox>
        </S.Contents>
      </form>
    </>
  );
}
