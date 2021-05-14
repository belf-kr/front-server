import styled, { css } from "styled-components";

const DayItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  ${(props) => {
    if (props.color == "#EBEDF0") {
      return css`
        background-color: ${props.color};
        border: solid 1px #e0e2e6;
      `;
    } else {
      return css`
        background-color: ${props.color};
      `;
    }
  }}
  border-radius: 3px;
`;

export default DayItem;
