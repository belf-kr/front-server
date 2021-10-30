import styled, { css } from "styled-components";

const DayOfWeekListBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  position: absolute;
  top: 40px;
  width: 100%;
  max-width: 320px;
  visibility: ${(props) => (props.isOpen ? "visible" : "collapse")};
  padding: 4px 20px;
  z-index: 80;
  flex-direction: row;
  right: 0;
  column-gap: auto;
`;

const DayOfWeekItemBox = styled.div`
  display: flex;
  height: 14px;
  line-height: 14px;
  margin: 8px auto 8px 0px;
`;

const DayOfWeekbuttonBox = styled.div`
  height: 14px;
  line-height: 14px;
  width: 34px;
  margin: 10px 0px;
  text-align: center;
`;
const ButtonBox = styled.div<{ isChecked: boolean }>`
  border-radius: 100%;
  margin: 0px auto;

  ${(props) =>
    props.isChecked
      ? css`
          background-color: ${({ theme }) => theme.brandColor.main};
          color: ${({ theme }) => theme.fontColor.main};
        `
      : null};
`;

const SelectDayOfWeekBox = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
`;

const SelectDayOfWeekInfoBox = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  padding: 10px 20px;
`;

const TitleLabel = styled.a`
  color: ${({ theme }) => theme.fontColor.sub2};
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
`;

const DayOfWeekLabelBox = styled.div`
  display: flex;
  margin-left: auto;
  height: 14px;
  line-height: 14px;
  margin-right: 6px;
`;

const DayOfWeekLabel = styled.a`
  color: ${({ theme }) => theme.fontColor.main};
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
`;

const DayOfWeekColor = styled.div<{ color?: string }>`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  max-width: 14px;
  min-width: 14px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin-right: 6px;
`;

const IconBox = styled.div<{ isOpen: boolean }>`
  width: 14px;
  float: right;
  transition: 0.2s ease-out;
  ${(props) =>
    props.isOpen
      ? css`
          transform: rotateZ(90deg);
        `
      : css`
          transform: rotateZ(0deg);
        `};
`;

export {
  DayOfWeekColor,
  DayOfWeekItemBox,
  DayOfWeekLabel,
  DayOfWeekLabelBox,
  DayOfWeekListBox,
  IconBox,
  SelectDayOfWeekBox,
  SelectDayOfWeekInfoBox,
  TitleLabel,
  DayOfWeekbuttonBox,
  ButtonBox,
};
