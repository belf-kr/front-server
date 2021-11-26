import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;

const ContentsCard = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  font-size: ${({ theme }) => theme.common.fontSize.s500}px;
  padding: 10px 16px;
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin: auto;
  padding: 6px;
`;

export { Box, ContentsCard, DeleteButton };
