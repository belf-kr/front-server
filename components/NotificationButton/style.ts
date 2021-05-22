import styled from "styled-components";
import Icon from "../../styles/Icon";

const Display = styled.div`
  background-color: #ff924a;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  transform: translate(0%, -50%);
  left: 19px;
  top: 13px;
  z-index: 1;
`;

const Frame = styled.div`
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 10px;
  width: 36px;
  height: 36px;
  position: absolute;
  display: inline-block;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
`;

const style = {
  Frame: Frame,
  Icon: Icon,
  Display: Display,
};

export default style;
