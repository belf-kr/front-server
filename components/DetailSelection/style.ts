import styled, { css } from "styled-components";

import Icon from "../../styles/Icon";

const DetailCardButton = styled.button`
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

type DetailCardIconType = {
  isOpen: boolean;
};

const DetailCardIcon = styled.div<DetailCardIconType>`
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

type DetailDialogType = {
  isOpen: boolean;
};

const DetailDialog = styled.div<DetailDialogType>`
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
  height: 70px;
`;

const WeekSelectionCard = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  height: 35px;
  width: 100%;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  box-sizing: content-box;
  padding: 5px 7px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

type DayOfWeekButtonType = {
  isChecked: boolean;
};

const DayOfWeekButton = styled.button<DayOfWeekButtonType>`
  border: none;
  border-right: 1px solid #e0e0e0;
  background-color: transparent;
  text-align: center;
  line-height: 35px;
  vertical-align: middle;
  :last-child {
    border: none;
  }

  ${(props) =>
    props.isChecked
      ? css`
          color: #ffffff;
        `
      : css`
          color: #ffab74;
        `}
`;

type DayOfWeekCheckType = {
  isChecked: boolean;
};

const DayOfWeekCheck = styled.div<DayOfWeekCheckType>`
  ${(props) =>
    props.isChecked
      ? css`
          width: 30px;
          height: 30px;
          background-color: #ffab74;
          border-radius: 100%;
          margin: auto;
          text-align: center;
          line-height: 30px;
          vertical-align: middle;
        `
      : null}
`;

const SelectedDayOfWeek = styled.div`
  float: right;
  font-size: 14px;
  color: #757575;
`;

const style = {
  DetailCardButton,
  DetailCardIcon,
  Icon,
  DetailDialog,
  WeekSelectionCard,
  DayOfWeekButton,
  Frame,
  DayOfWeekCheck,
  SelectedDayOfWeek,
};

export default style;
