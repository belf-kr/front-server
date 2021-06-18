import styled from "styled-components";

import Icon from "../../styles/Icon";

const Frame = styled.div`
  height: 90px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

const Card = styled.div`
  max-width: 390px;
  height: 80px;
  background-color: white;
  margin: auto;
  margin-top: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 30px 30px 0px 0px;
  position: relative;
`;

const style = {
  Icon,
  Frame,
  Card,
};

export default style;
