import styled, { css } from "styled-components";

import Icon from "../../styles/Icon";

const CourseCardButton = styled.button`
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  width: 100%;
  margin: 0;
  background-color: white;
  font-size: 12px;
  line-height: 20px;
  color: #757575;
  display: grid;
  grid-template-columns: 40px auto 8px;
  column-gap: 15px;
  position: absolute;
  border-bottom: solid 1px #f4f4f4;
`;

type CourseCardIconType = {
  isOpen: boolean;
};

const CourseCardIcon = styled.div<CourseCardIconType>`
  width: 8px;
  height: 14px;
  margin: 0;
  position: relative;
  transform: translateY(-50%);
  top: 50%;
  transition: 0.2s;

  ${(props) =>
    props.isOpen
      ? css`
          transform: rotateZ(90deg);
          top: 25%;
        `
      : null}
`;

const SelectedCourse = styled.div`
  float: right;
`;

type CourseColorType = {
  bgColor: string;
};

const CourseColor = styled.div<CourseColorType>`
  background-color: ${(props) => props.bgColor};
  border-radius: 100%;
  width: 15px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;
`;

const CourseTitle = styled.div`
  display: inline-block;
  line-height: 20px;
  vertical-align: middle;
  margin-left: 8px;
  font-size: 14px;
  color: #757575;
`;

const CourseItem = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  border-bottom: solid 1px #f4f4f4;
`;

type CourseItemListType = {
  isOpen: boolean;
};

const CourseItemList = styled.div<CourseItemListType>`
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 45px 0px;
  padding: 10px 15px 10px 15px;
  width: 100%;
  max-height: 180px;
  background-color: white;
  position: absolute;
  transition: 0.5s;

  z-index: 1;

  * {
    margin: 4px;
  }

  *:last-child {
    border: none;
  }

  ${(props) =>
    !props.isOpen
      ? css`
          height: 0px;
          overflow: hidden;
          padding: 0px 15px;
        `
      : css`
          overflow: auto;
        `}
`;

const Frame = styled.div`
  position: relative;
  height: 40px;
  z-index: 2;
`;

const style = {
  CourseItem,
  CourseCardButton,
  CourseCardIcon,
  SelectedCourse,
  Icon,
  CourseColor,
  CourseTitle,
  CourseItemList,
  Frame,
};

export default style;
