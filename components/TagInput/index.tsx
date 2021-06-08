import { RefObject, useEffect, useRef, useState } from "react";

import { default as S } from "./style";

import smallDelete from "../../assets/icons/smallDelete";

type props = {
  placeholder?: string;
  type?: string;
};

function usePress(keyPress: (e: KeyboardEvent) => void): RefObject<HTMLInputElement> {
  const element: RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("keypress", keyPress);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("keypress", keyPress);
      }
    };
  });
  return element;
}

function TagInput({ placeholder, type }: props): JSX.Element {
  const [tagList, setTagList] = useState<string[]>([]);

  const refInput = usePress((e) => {
    switch (e.code) {
      case "Enter":
      case "Space": {
        const text = refInput.current.value.replaceAll(" ", "");
        if (text !== "" && tagList.indexOf(text) < 0) {
          setTagList([...tagList, text]);
          refInput.current.value = "";
        }
        break;
      }
    }
  });

  const clickedDelete = (index): void => {
    const tempArray = [...tagList];
    tempArray.splice(index, 1);
    setTagList(tempArray);
  };

  return (
    <>
      <S.Input type={type} placeholder={placeholder} ref={refInput} />
      <S.TagsSection>
        {tagList.map((element, index) => (
          <S.Tag key={element}>
            <S.TagTextSection>#{element}</S.TagTextSection>
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
