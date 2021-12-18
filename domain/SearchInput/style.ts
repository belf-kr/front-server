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
  width: 100%;
  height: 100%;
  display: flex;
`;

const IconArea = styled.div`
  float: left;
  margin: 5px;
`;

const Input = styled.input`
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.fontColor.sub};
  padding: 5px 10px 5px 0px;
  flex: 1;
  width: 15rem;

  @media only screen and (max-width: 850px) {
    padding: 5px 10px;
    width: 100%;
  }

  :focus {
    border: none;
    outline: none;
  }
`;

const InputSubmit = styled.input`
  visibility: hidden;
`;

const PopupBox = styled.div<{ isOpen: boolean }>`
  @media only screen and (max-width: 850px) {
    background-color: blue;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColor.bg};
    border: 1px solid ${({ theme }) => theme.lineColor.main};
    left: -1px;
    top: 62px;
    padding: 4px 0px;
    width: calc(100% + 2px);
  }
`;

export { Box, IconArea, Input, Card, InputSubmit, PopupBox };
