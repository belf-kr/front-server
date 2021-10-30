import styled, { css } from "styled-components";

const CourseListBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  position: absolute;
  top: 40px;
  width: 100%;
  visibility: ${(props) => (props.isOpen ? "visible" : "collapse")};
  padding: 0px 20px;
  z-index: 80;
  flex-direction: column;
  max-height: 260px;
  overflow-y: auto;
`;

const CourseItemBox = styled.div`
  display: flex;
  height: 14px;
  line-height: 14px;
  margin: 16px auto 16px 0px;
`;

const SelectCourseBox = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
`;

const SelectCourseInfoBox = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  padding: 10px 20px;
`;

const TitleLabel = styled.a`
  color: ${({ theme }) => theme.fontColor.sub2};
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
`;

const CourseLabelBox = styled.div`
  display: flex;
  margin-left: auto;
  height: 14px;
  line-height: 14px;
  margin-right: 6px;
`;

const CourseLabel = styled.a`
  color: ${({ theme }) => theme.fontColor.sub};
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
`;

const CourseColor = styled.div<{ color?: string }>`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  max-width: 14px;
  min-width: 14px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin-right: 6px;
`;

const IconBox = styled.div<{ isOpen: boolean }>`
  width: 14px;
  float: right;
  transition: 0.2s ease-out;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotateZ(90deg);
        `
      : css`
          transform: rotateZ(0deg);
        `};
`;

const BottomBorderBox = styled.div<{ isLast: boolean }>`
  ${(props) =>
    props.isLast
      ? null
      : css`
          border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
        `}
`;

export { BottomBorderBox, CourseColor, CourseItemBox, CourseLabel, CourseLabelBox, CourseListBox, IconBox, SelectCourseBox, SelectCourseInfoBox, TitleLabel };
