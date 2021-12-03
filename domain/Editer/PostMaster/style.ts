import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
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

const Body = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  padding: 6px 10px;
`;

export { Box, Title, TitleBox, Body };
