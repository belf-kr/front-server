import { useState } from "react";

import * as S from "./style";

import { EditNode } from "../../../types/components-type/editer";
import PostNodeItem from "../PostNodeItem";

type props = {
  nodeList: EditNode[];
};

export default function WriteNodeList({ nodeList }: props): JSX.Element {
  const [content] = useState<EditNode[]>(nodeList);

  return (
    <S.Box>
      {content.map((nodeItem) => (
        <PostNodeItem key={`node_${nodeItem.id}`} node={nodeItem} />
      ))}
    </S.Box>
  );
}
