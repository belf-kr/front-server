import styled from "styled-components";

const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: repeat(7, 10px);
  grid-gap: 4px;
`;

export default WeekGrid;
