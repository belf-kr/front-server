import React from "react";
import styled from "styled-components";
import { SkeletonFrame } from "../../styles/SkeletonFrame";
import SkeletonUI from "../SkeletonUI";

const TodoItemSection = styled.div`
  ${SkeletonFrame}
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  z-index: 0;
`;

function Loading(): JSX.Element {
  return (
    <>
      <TodoItemSection>
        <SkeletonUI />
      </TodoItemSection>
      <TodoItemSection>
        <SkeletonUI />
      </TodoItemSection>
      <TodoItemSection>
        <SkeletonUI />
      </TodoItemSection>
    </>
  );
}
export default Loading;
