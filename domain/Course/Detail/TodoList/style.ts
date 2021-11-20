import styled from "styled-components";

const TodoBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
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

export { Title, TitleBox, TodoBox };
