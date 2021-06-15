import styled from "styled-components";

const ButtonSection = styled.div`
  height: 45px;
  margin-bottom: 20px;
  margin-top: 20px;
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
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
