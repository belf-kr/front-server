import React from "react";
import styled from "styled-components";

import { default as S } from "./style";

import SkeletonUI from "../SkeletonUI";

import { SkeletonFrame } from "../../styles/SkeletonFrame";

const ProfileImg = styled.div`
  ${SkeletonFrame}
  border-radius: 100%;
  height: 65px;
`;

const Bar = styled.div`
  ${SkeletonFrame}
  margin: 2px;
`;

function Loading(): JSX.Element {
  return (
    <>
      <S.Frame>
        <ProfileImg>
          <SkeletonUI />
        </ProfileImg>
        <S.IdAndIntro>
          <Bar>
            <SkeletonUI />
          </Bar>
          <Bar>
            <SkeletonUI />
          </Bar>
        </S.IdAndIntro>
      </S.Frame>
    </>
  );
}
export default Loading;
