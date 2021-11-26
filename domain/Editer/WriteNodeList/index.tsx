import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

import AddIcon from "../../../icons/AddIcon";
import TextIcon from "../../../icons/TextIcon";
import WriteNodeItem from "../WriteNodeItem";
import { EditNode } from "../../../types/components-type/editer";
import ImageIcon from "../../../icons/ImageIcon";

export default function WriteNodeList(): JSX.Element {
  const [nodeList, setNodeList] = useState<EditNode[]>([]);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: any) => {
    if (modalEl.current) {
      if (!modalEl.current?.contains(target)) {
        setIsOpenPopup(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickAddText = () => {
    setNodeList((prev: EditNode[]) =>
      prev.length === 0
        ? [{ id: 0, type: "text", contents: { text: "" } }]
        : [...prev, { id: nodeList[nodeList.length - 1].id + 1, type: "text", contents: { text: "" } }]
    );
    setIsOpenPopup(false);
  };

  const handleClickImageText = () => {
    setNodeList((prev: EditNode[]) =>
      prev.length === 0
        ? [{ id: 0, type: "image", contents: { name: "", url: "" } }]
        : [...prev, { id: nodeList[nodeList.length - 1].id + 1, type: "image", contents: { name: "", url: "" } }]
    );
    setIsOpenPopup(false);
  };

  return (
    <S.Box>
      {nodeList.map((nodeItem) => (
        <WriteNodeItem key={"node_" + nodeItem.id} nodeItem={nodeItem} setNodeList={setNodeList} />
      ))}

      <S.AddBox ref={modalEl}>
        <S.AddButton onClick={() => setIsOpenPopup(!isOpenPopup)}>
          <AddIcon />
        </S.AddButton>
        {isOpenPopup ? (
          <S.EditBox>
            <S.EditButton onClick={handleClickAddText}>
              <TextIcon />
            </S.EditButton>
            <S.EditButton onClick={handleClickImageText}>
              <ImageIcon />
            </S.EditButton>
          </S.EditBox>
        ) : null}
      </S.AddBox>
    </S.Box>
  );
}
