import styled from "styled-components";

const BelfAndLikeSection = styled.div`
  /* max-width: 350px; */
  width: 200px;
  height: 40px;
  margin: auto;
  overflow: visible;
  position: sticky;
  z-index: 2;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;

  * {
    margin: 0;
  }
`;

const style = {
  BelfAndLikeSection,
};

export default style;
