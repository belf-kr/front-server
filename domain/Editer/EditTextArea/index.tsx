import { TextareaHTMLAttributes, useEffect, useRef, useState } from "react";

import * as S from "./style";

export default function EditTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <S.Box parentHeight={parentHeight}>
      <S.TextArea
        {...props}
        ref={textAreaRef}
        rows={1}
        style={{
          height: textAreaHeight,
        }}
        onChange={onChangeHandler}
        placeholder="입력해주세요"
      />
    </S.Box>
  );
}
