import styled from "styled-components";

type HeaderBackGroundType = {
  pageType?: string;
};

const HeaderBackGround = styled.div<HeaderBackGroundType>`
  background-color: #ffab74;
  width: 550px;
  height: 390px;
  position: fixed;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
  border-radius: ${(props) => {
    if (props.pageType == "today") {
      return "50%";
    }
    return "30%";
  }};
`;

export default HeaderBackGround;
