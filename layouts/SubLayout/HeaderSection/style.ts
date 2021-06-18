import styled from "styled-components";

const HeaderSection = styled.div`
  margin-top: 20px;
  height: 35px;
  line-height: 35px;
  position: sticky;
  z-index: 3;
  overflow-y: hidden;
  top: 20px;
  justify-items: center;

  display: grid;
  grid-template-columns: 15px auto 30px;
`;

const style = {
  HeaderSection,
};

export default style;
