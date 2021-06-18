import React from "react";
import styled from "styled-components";

import { SkeletonFrame } from "../../styles/SkeletonFrame";

import SkeletonUI from "../SkeletonUI";

const Card = styled.div`
  ${SkeletonFrame}
  height: 110px;
`;

function Loading(): JSX.Element {
  return (
    <Card>
      <SkeletonUI />
    </Card>
  );
}
export default Loading;
