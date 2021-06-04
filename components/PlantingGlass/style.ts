import styled, { css } from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 3% 4%;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 110px;
`;

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 3%);
  grid-gap: 1.215%;
`;

const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: repeat(7, 10px);
  grid-gap: 4px;
`;

const WeekItem = styled.div`
  display: flex;
`;

const style = {
  Card,
  Grid,
  WeekGrid,
  WeekItem,
  DayItem,
};

export default style;
