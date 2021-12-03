import { useState } from "react";

import * as S from "./style";

import { EditNode, ImageNode, TextNode } from "../../../types/components-type/editer";

type props = {
  node: EditNode;
};

export default function PostNodeItem({ node }: props): JSX.Element {
  const [item] = useState<EditNode>(node);

  return <S.Box>{item.type == "text" ? <a>{(item.contents as TextNode).text}</a> : <img src={(item.contents as ImageNode).url} />}</S.Box>;
}
