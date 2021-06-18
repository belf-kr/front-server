import styled from "styled-components";

type ButtonType = {
  bgColor?: string;
};

const Button = styled.button<ButtonType>`
  font-size: 14px;
  color: white;
  background-color: transparent;
  border: none;
  height: 30px;
  padding: 0px;
`;

const style = {
  Button,
};

export default style;
