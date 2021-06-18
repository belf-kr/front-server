import React, { useState } from "react";

import { default as S } from "./style";

import PostContent from "../../libs/type/PostContent";
import InputSection from "../../layouts/AddLayout/InputSection";

function createTextInput(color: string, fontSize: number) {
  const content: PostContent = {
    type: "text",
    detail: {
      text: "",
      option: {
        color: color,
        font_size: fontSize,
      },
    },
  };
  return content;
}

function PostContents(): JSX.Element {
  const [contentList, setContentList] = useState<PostContent[]>([]);

  return (
    <>
      {contentList.map((content: PostContent, index: number) => {
        if (content.type == "text") {
          return (
            <InputSection key={index} marginTop={"5px"}>
              <S.Textarea placeholder={"Text"} onChange={() => null} />
            </InputSection>
          );
        } else if (content.type == "image") {
          return <></>;
        }
      })}
      <button
        onClick={() => {
          setContentList([...contentList, createTextInput("black", 16)]);
        }}
      />
    </>
  );
}

export default PostContents;
