import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  height: 30px;
  width: auto;
  @media only screen and (max-width: 850px) {
    width: 30px;
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const IconArea = styled.div`
  position: absolute;
  left: 10px;
  top: 5px;
  @media only screen and (max-width: 850px) {
    left: 5px;
  }
`;

const Input = styled.input`
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.fontColor.sub};
  padding: 5px 10px 5px 36px;
  width: 100%;

  @media only screen and (max-width: 850px) {
    visibility: collapse;
  }

  :focus {
    border: none;
    outline: none;
  }
`;

export { Box, IconArea, Input, Card };
