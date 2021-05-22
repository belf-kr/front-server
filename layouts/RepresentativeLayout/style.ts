import styled, { css } from "styled-components";

type HeaderBackgroundType = {
  pageType?: string;
};

const todayPage = css`
  top: -40px;
  border-radius: 50%;
`;
const coursePage = css`
  border-radius: 0%;
  top: -70px;
`;

const HeaderBackground = styled.div<HeaderBackgroundType>`
  background-color: #ffab74;
  width: 150%;
  height: 390px;
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s;
  ${(props) => {
    switch (props.pageType) {
      case "today":
        return todayPage;
      case "course":
        return coursePage;
    }
  }};
`;

const ContentsSection = styled.div`
  margin-bottom: 90px;
  overflow: visible;
`;

const HeaderSection = styled.div`
  height: 55px;
  line-height: 55px;
  position: sticky;
  top: 10px;
  margin-top: 10px;
  z-index: 3;
`;

const style = {
  HeaderSection: HeaderSection,
  HeaderBackground: HeaderBackground,
  ContentsSection: ContentsSection,
};

export default style;
