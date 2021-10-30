import styled from "styled-components";

const Layout = styled.div`
  max-width: 1280px;
  margin: auto;

  padding: 60px 70px 60px 20px;

  display: flex;
  flex-direction: row;
  position: relative;

  @media only screen and (max-width: 850px) {
    padding: 60px 20px;
    flex-direction: column;
  }
`;

export { Layout };
