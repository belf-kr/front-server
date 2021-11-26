import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const AddBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 6px;
`;

const EditBox = styled.div`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  height: 32px;
  padding: 6px 16px;
  display: flex;
  flex-direction: row;
  column-gap: 16px;
`;

const EditButton = styled.button`
  background-color: transparent;
`;

export { AddBox, AddButton, Box, EditBox, EditButton };
