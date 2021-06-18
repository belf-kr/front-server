import React from "react";
import styled from "styled-components";

import SkeletonUI from "../SkeletonUI";

import { SkeletonFrame } from "../../styles/SkeletonFrame";

const Box = styled.div`
  ${SkeletonFrame}
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin: 5px 0px;
`;

function Loading(): JSX.Element {
  return (
    <Box>
      <SkeletonUI />
    </Box>
  );
}
export default Loading;
