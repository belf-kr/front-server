import React, { FormEvent } from "react";

import * as S from "./style";

import TagInput from "../../Tag/TagInput";
import Button from "../../../components/Button";
import SelectCourseColor from "../SelectCourseColor";
import useGetString from "../../../hooks/useGetString";
import useOnChange from "../../../hooks/useOnChange";

export default function CreateCourse(): JSX.Element {
  const [color, setColor] = useGetString();
  const [title, setTitle] = useOnChange();
  const [explanation, setExplanation] = useOnChange();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(color);
    console.log(title);
    console.log(explanation);
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
            <SelectCourseColor colorOnChange={setColor} />
          </S.RadioColorsBox>
          <S.SubTitleBox>
            <S.SubTitle>코스 제목</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultInput type="text" placeholder="입력해주세요" name="title" onChange={setTitle} />
          <S.SubTitleBox>
            <S.SubTitle>설명</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultTextArea placeholder="입력해주세요 (200자)" name="explanation" rows={6} maxLength={200} onChange={setExplanation} />
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
