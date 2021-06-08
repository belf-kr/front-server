import styled from "styled-components";

const ButtonSection = styled.div`
  width: 100%;
  position: relative;
`;
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  column-gap: 25px;
  padding-bottom: 20px;
`;

const style = {
  ButtonSection,
  ButtonGrid,
};

export default style;
