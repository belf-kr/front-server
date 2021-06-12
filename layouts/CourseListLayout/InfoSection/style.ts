import styled from "styled-components";

const InfoSection = styled.div`
  max-width: 350px;
  height: 40px;
  margin: auto;
  margin-top: 10px;
  overflow: visible;
  position: sticky;
  top: 75px;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 30px 140px;
  column-gap: 5px;
`;

const style = {
  InfoSection,
};

export default style;
