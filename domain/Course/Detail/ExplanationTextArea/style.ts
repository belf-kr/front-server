import styled from "styled-components";

const Box = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Card = styled.div`
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;

  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  color: ${({ theme }) => theme.fontColor.sub2};
  margin-top: 10px;
`;

const SubTitleBox = styled.div`
  margin-top: 20px;
  height: 24px;
`;

const SubTitle = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s400}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.main};
`;

export { Box, Card, SubTitle, SubTitleBox };
