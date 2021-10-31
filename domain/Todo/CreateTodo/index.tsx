import React from "react";

import { useRouter } from "next/router";

import * as S from "./style";

import { postNewTodo } from "../../../libs/todo";

import Button from "../../../components/Button";
import SelectCourse from "../SelectCourse";
import SelectDayOfWeek from "../SelectDayOfWeek";

import useOnChange from "../../../hooks/useOnChange";
import useCourseOnChange from "../../../hooks/useCourseOnChange";

export default function CreateTodo(): JSX.Element {
  const router = useRouter();

  const [title, setTitle] = useOnChange();
  const [explanation, setExplanation] = useOnChange();
  const [course, setCourse] = useCourseOnChange();

  const addTodo = async () => {
    await postNewTodo({
      courseId: course.id,
      title: title,
      explanation: explanation,
      recurringCycleDate: 1,
      passedDay: 1,
    });
    router.back();
  };

  return (
    <>
      <S.TitleBox>
        <S.Title>새로운 할일 추가</S.Title>
      </S.TitleBox>
      <S.Contents>
        <S.SubTitleBox>
          <S.SubTitle>할일 제목</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="입력해주세요" name="title" onChange={setTitle} />
        <S.SubTitleBox>
          <S.SubTitle>설명</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultTextArea placeholder="입력해주세요 (200자)" name="explanation" rows={6} maxLength={200} onChange={setExplanation} />
        <S.SubTitleBox>
          <S.SubTitle>코스 선택</S.SubTitle>
        </S.SubTitleBox>
        <SelectCourse courseOnChange={setCourse} />
        <S.SubTitleBox>
          <S.SubTitle>옵션</S.SubTitle>
        </S.SubTitleBox>
        <SelectDayOfWeek />
        <S.SubmitButtonBox onClick={addTodo}>
          <Button type={"submit"} text={"할일 생성"} />
        </S.SubmitButtonBox>
      </S.Contents>
    </>
  );
}
