import styled, { css } from "styled-components";

const Box = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const DayBox = styled.button<{ isCurrent?: boolean }>`
  display: inline-block;
  width: 60px;
  height: 80px;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  ${(props) =>
    props.isCurrent
      ? css`
          background-color: ${({ theme }) => theme.brandColor.main};
        `
      : css`
          background-color: ${({ theme }) => theme.backgroundColor.card};
        `}
  color: ${({ theme }) => theme.fontColor.main};
  margin: 0px 6px;
  user-select: none;
`;

const DayFlexBox = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  flex-direction: column;
  text-align: center;
  padding: 14px 0px;
  row-gap: 12px;
`;

const YearMonthBox = styled.div`
  margin: 0px 6px 6px 6px;
  font-size: ${({ theme }) => theme.common.fontSize.s500}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
`;

export { Box, DayBox, DayFlexBox, YearMonthBox };
