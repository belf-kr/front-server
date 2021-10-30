import styled from "styled-components";

const CourseListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
  }
`;

const TitleBox = styled.div`
  height: 40px;
  margin-top: 20px;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
`;

export { CourseListBox, Title, TitleBox };
