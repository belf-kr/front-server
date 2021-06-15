import React, { useState } from "react";

import { default as S } from "./style";

import smallDelete from "../../assets/icons/smallDelete";

import { Tag } from "../../libs/type/CourseItem";

type props = {
  placeholder?: string;
  type?: string;
  tagsOnChange?: (value: Tag[]) => void;
};

function TagInput({ placeholder, type, tagsOnChange }: props): JSX.Element {
  const [tagList, setTagList] = useState<Tag[]>([]);

  const pressedKey = (e) => {
    switch (e.code) {
      case "Enter":
      case "Space": {
        const text = e.target.value.replaceAll(" ", "");
        if (text !== "" && tagList.map((e) => e.value).indexOf(text) < 0) {
          const tempArray = [...tagList, { value: text }];
          setTagList(tempArray);
          tagsOnChange(tempArray);
          e.target.value = "";
        }
        break;
      }
    }
  };

  const clickedDelete = (index): void => {
    const tempArray = [...tagList];
    tempArray.splice(index, 1);
    setTagList(tempArray);
    tagsOnChange(tempArray);
  };

  return (
    <>
      <S.Input type={type} placeholder={placeholder} onKeyPress={pressedKey} />
      <S.TagsSection>
        {tagList.map((element, index) => (
          <S.Tag key={element.value}>
            <S.TagTextSection>#{element.value}</S.TagTextSection>
            <S.TagIconSection onClick={() => clickedDelete(index)}>
              <S.Icon {...smallDelete}>
                <path d={smallDelete.d} />
              </S.Icon>
            </S.TagIconSection>
          </S.Tag>
        ))}
      </S.TagsSection>
    </>
  );
}

export default TagInput;
