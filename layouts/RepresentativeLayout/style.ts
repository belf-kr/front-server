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

const myPage = css`
  border-radius: 30px;
  top: -35px;
  width: 100%;
`;

const addCourseAndReminder = css`
  height: 200%;
  z-index: -1;
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
      case "Today":
        return todayPage;
      case "Course":
        return coursePage;
      case "MyPage":
        return myPage;
      case "Add":
        return addCourseAndReminder;
    }
  }};
`;

const style = {
  HeaderBackground,
};

export default style;
