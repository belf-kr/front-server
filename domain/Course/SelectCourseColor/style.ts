import styled from "styled-components";

const ColorInput = styled.input.attrs({ type: "radio" })<{ color: string }>`
  background-color: ${(props) => props.color};
  appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
  :checked {
    border: 4px solid ${({ theme }) => theme.fontColor.sub2};
  }
`;

export { ColorInput };
