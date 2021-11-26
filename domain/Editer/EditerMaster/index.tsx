import React from "react";

import * as S from "./style";

import styled from "styled-components";
import Button from "../../../components/Button";
import WriteNodeList from "../WriteNodeList";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function EditerMaster(): JSX.Element {
  return (
    <Box>
      <S.TitleBox>
        <S.Title>할일 타이틀</S.Title>
        <S.AddCourseButtonBox>
          <Button text={"게시"} />
        </S.AddCourseButtonBox>
      </S.TitleBox>
      <WriteNodeList />
    </Box>
  );
}
