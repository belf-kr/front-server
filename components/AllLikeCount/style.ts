import styled from "styled-components";

import Icon from "../../styles/Icon";

const Box = styled.div`
  padding: 5px 10px;
  background-color: white;
  border-radius: 20px;
  display: inline-block;
  color: #ff7e7e;
  font-weight: bold;
  position: relative;
  font-size: 14px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 5px 0px;
`;

const Frame = styled.div`
  display: grid;
  grid-template-columns: 14px 13px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IconArea = styled.div`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 16px;
`;

const BarArea = styled.div`
  position: relative;
  display: inline-block;
  width: 13px;
  height: 16px;
`;

const TextArea = styled.span`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const style = {
  Box,
  Icon,
  IconArea,
  BarArea,
  TextArea,
  Frame,
};

export default style;
