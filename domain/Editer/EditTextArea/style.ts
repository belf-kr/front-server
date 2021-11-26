import styled from "styled-components";

const Box = styled.div<{ parentHeight: string }>`
  min-height: ${(props) => props.parentHeight};
`;

const TextArea = styled.textarea`
  color: ${({ theme }) => theme.fontColor.main};
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  padding: 10px;
`;

export { Box, TextArea };
