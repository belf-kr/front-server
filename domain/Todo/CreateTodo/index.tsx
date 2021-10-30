import React, { FormEvent } from "react";

import * as S from "./style";

import Button from "../../../components/Button";
import SelectCourse from "../SelectCourse";
import SelectDayOfWeek from "../SelectDayOfWeek";

export default function CreateTodo(): JSX.Element {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <S.TitleBox>
        <S.Title>새로운 할일 추가</S.Title>
      </S.TitleBox>
      <form onSubmit={handleSubmit}>
        <S.Contents>
          <S.SubTitleBox>
            <S.SubTitle>할일 제목</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultInput type="text" placeholder="입력해주세요" name="title" />
          <S.SubTitleBox>
            <S.SubTitle>코스 선택</S.SubTitle>
          </S.SubTitleBox>
          <SelectCourse />
          <S.SubTitleBox>
            <S.SubTitle>옵션</S.SubTitle>
          </S.SubTitleBox>
          <SelectDayOfWeek />
          <S.SubmitButtonBox>
            <Button type={"submit"} text={"할일 생성"} />
          </S.SubmitButtonBox>
        </S.Contents>
      </form>
    </>
  );
}
