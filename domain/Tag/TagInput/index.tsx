import React, { useRef, useState } from "react";

import * as S from "./style";

import { Tag } from "../../../types/components-type/course";

import CloseIcon from "../../../icons/CloseIcon";

export default function TagInput(): JSX.Element {
  const [tagList, setTagList] = useState<Tag[]>([]);
  const tagInputRef = useRef<HTMLInputElement>(null);

  const pressedKey = (e: any) => {
    if (tagInputRef.current) {
      switch (e.code) {
        case "Enter":
        case "Space": {
          const text = tagInputRef.current.value.replaceAll(" ", "");
          if (text !== "" && !tagList.map((tag) => tag.value).includes(text)) {
            setTagList([...tagList, { value: text }]);
            tagInputRef.current.value = "";
          }
          break;
        }
      }
    }
  };

  const clickedDelete = (index: number) => {
    const tempArray = [...tagList];
    tempArray.splice(index, 1);
    setTagList(tempArray);
  };

  return (
    <>
      <S.DefaultInput type="text" placeholder="태그를 입력해주세요" onKeyPress={pressedKey} ref={tagInputRef} maxLength={30} />
      <S.TagsBox>
        {tagList.map((element, index) => (
          <S.TagBox key={element.value}>
            <S.TagCheckBox type="checkbox" id={element.value} name="tags" defaultChecked={true} />
            <S.TagTitleBox>{element.value}</S.TagTitleBox>
            <S.TagIconBox onClick={() => clickedDelete(index)}>
              <CloseIcon />
            </S.TagIconBox>
          </S.TagBox>
        ))}
      </S.TagsBox>
    </>
  );
}
