import styled from "styled-components";

type ButtonType = {
  bgColor?: string;
};

const Button = styled.button<ButtonType>`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.bgColor};
  width: 130px;
  height: 45px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border: none;
  /* margin: auto; */
`;

const style = {
  Button,
};

export default style;
