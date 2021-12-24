import React, { useState } from "react";

import { useRouter } from "next/router";

import * as S from "./style";

import useGetString from "../../../hooks/useGetString";
import useOnChange from "../../../hooks/useOnChange";
import useTagOnChange from "../../../hooks/useTagOnChange";

import Button from "../../../components/Button";
import SelectCourseColor from "../SelectCourseColor";
import TagInput from "../../Tag/TagInput";
import { postNewCourse } from "../../../libs/course";
import { expiredTokenFallback } from "../../../libs/oauth";

export default function CreateCourse(): JSX.Element {
  const [isPost, setIsPost] = useState<boolean>(false);

  const router = useRouter();
  const [color, setColor] = useGetString();
  const [title, setTitle] = useOnChange();
  const [explanation, setExplanation] = useOnChange();
  const [tags, setTags] = useTagOnChange();

  const addCourse = async () => {
    try {
      if (isPost) {
        return;
      }
      if (!title || !color) {
        alert("입력되지 않은 값이 있습니다.");
        return;
      }
      setIsPost(true);
      await postNewCourse({
        title: title,
        explanation: explanation,
        color: color,
        tags: tags,
      });
      setIsPost(false);
      router.back();
    } catch (error) {
      expiredTokenFallback(error);
    }
  };

  return (
    <>
      <S.TitleBox>
        <S.Title>새로운 코스 추가</S.Title>
      </S.TitleBox>
      <S.Contents>
        <S.SubTitleBox>
          <S.SubTitle>* 코스 색상 선택</S.SubTitle>
        </S.SubTitleBox>
        <S.RadioColorsBox>
          <SelectCourseColor colorOnChange={setColor} />
        </S.RadioColorsBox>
        <S.SubTitleBox>
          <S.SubTitle>* 코스 제목</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="입력해주세요" name="title" onChange={setTitle} />
        <S.SubTitleBox>
          <S.SubTitle>설명</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultTextArea placeholder="입력해주세요 (200자)" name="explanation" rows={6} maxLength={200} onChange={setExplanation} />
        <S.SubTitleBox>
          <S.SubTitle>태그</S.SubTitle>
        </S.SubTitleBox>
        <TagInput tagsOnChange={setTags} />
        <S.SubmitButtonBox onClick={addCourse}>
          <Button type={"submit"} text={isPost ? "코스 생성 중..." : "코스 생성"} />
        </S.SubmitButtonBox>
      </S.Contents>
    </>
  );
}
