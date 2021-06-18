import React from "react";

import { default as S } from "./style";

type props = {
  onClick?: () => void;
};

function PostButton({ onClick }: props): JSX.Element {
  return <S.Button onClick={onClick}>게시</S.Button>;
}

export default PostButton;
