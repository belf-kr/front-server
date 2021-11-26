import React, { Dispatch, SetStateAction, useState } from "react";

import * as S from "./style";

import CloseIcon from "../../../icons/CloseIcon";
import { EditNode, TextNode } from "../../../types/components-type/editer";
import EditTextArea from "../EditTextArea";
import EditImageArea from "../EditImageArea";

type props = {
  nodeItem: EditNode;
  setNodeList: Dispatch<SetStateAction<EditNode[]>>;
};

export default function WriteNodeItem({ nodeItem, setNodeList }: props): JSX.Element {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleClickDelete = () => {
    setNodeList((prev: EditNode[]) => {
      return [...prev].filter((prevNode) => prevNode.id !== nodeItem.id);
    });
  };

  const handleTextOnChange = (event: any) => {
    setNodeList((prev: EditNode[]) => {
      (prev.find((prevNode) => prevNode.id === nodeItem.id).contents as TextNode).text = event.target.value;
      return [...prev];
    });
  };

  const getEditNodeComponent = () => {
    switch (nodeItem.type) {
      case "text":
        return <EditTextArea onChange={handleTextOnChange} />;
      case "image":
        return <EditImageArea nodeItem={nodeItem} setNodeList={setNodeList} />;
    }
  };

  return (
    <S.Box onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
      <S.ContentsCard>{getEditNodeComponent()}</S.ContentsCard>
      {isMouseOver ? (
        <S.DeleteButton onClick={handleClickDelete}>
          <CloseIcon />
        </S.DeleteButton>
      ) : null}
    </S.Box>
  );
}
