import styled from "styled-components";

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 100;
`;

const MainBox = styled.div`
  z-index: 1;
  padding-top: 63px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor.bg};
  transition: all 0.25s linear;
`;

export { HeaderBox, MainBox };
