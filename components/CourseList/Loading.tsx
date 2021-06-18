import React from "react";
import styled from "styled-components";
import { SkeletonFrame } from "../../styles/SkeletonFrame";
import SkeletonUI from "../SkeletonUI";

const CourseItemSection = styled.div`
  ${SkeletonFrame}
  height: 80px;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;
`;

function Loading(): JSX.Element {
  return (
    <>
      <CourseItemSection>
        <SkeletonUI />
      </CourseItemSection>
      <CourseItemSection>
        <SkeletonUI />
      </CourseItemSection>
      <CourseItemSection>
        <SkeletonUI />
      </CourseItemSection>
    </>
  );
}
export default Loading;
