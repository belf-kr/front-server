import styled, { css } from "styled-components";

const Card = styled.div`
  padding: 14px;
  height: 120px;
  max-width: 360px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  display: grid;

  grid-template-columns: repeat(24, 10fr);
  grid-column-gap: 4px;
`;

const WeekGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 10px);
  grid-gap: 4px;
`;

const DayItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  ${(props) => {
    if (props.color == "#EBEDF0") {
      return css`
        background-color: ${props.color};
        border: solid 1px #e0e2e6;
      `;
    } else {
      return css`
        background-color: ${props.color};
      `;
    }
  }}
  border-radius: 3px;
`;

const TitleBox = styled.div`
  height: 40px;
  margin-top: 20px;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
`;

export { Card, DayItem, WeekGrid, Title, TitleBox };
