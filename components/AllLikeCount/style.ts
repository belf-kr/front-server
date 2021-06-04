import styled from "styled-components";

import Icon from "../../styles/Icon";

const Box = styled.div`
  height: 26px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 20px;
  display: inline-block;
  color: #ff7e7e;
  font-weight: bold;
  position: relative;
  font-size: 14px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 7px 0px;
  margin-right: 4px;
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
  padding-bottom: 7px;
`;

const style = {
  Box: Box,
  Icon: Icon,
  IconArea: IconArea,
  BarArea: BarArea,
  TextArea: TextArea,
};

export default style;
