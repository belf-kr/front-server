import styled from "styled-components";

const CourseListBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
`;

const AddCourseButtonBox = styled.div`
  float: right;
  > button {
    padding: 6px 20px 4px 16px;
  }
`;

export { CourseListBox, Title, TitleBox, AddCourseButtonBox };
