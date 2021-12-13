import styled, { css } from "styled-components";

const TodoItemBox = styled.button`
  height: 60px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  background-color: transparent;
`;

const InfoBox = styled.div`
  padding-left: 6px;
  width: 100%;
  position: relative;
`;

const CheckIconBox = styled.div`
  svg {
    max-width: 20px;
    min-width: 20px;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`;

const TextBox = styled.div`
  height: 20px;
  width: 100%;
`;

const TodoText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  color: ${({ theme }) => theme.fontColor.main};
  float: left;
  height: 20px;
  line-height: 20px;
`;

const ExpranationText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  color: ${({ theme }) => theme.fontColor.sub};
  vertical-align: top;
  float: left;
  height: 20px;
  line-height: 20px;
`;

const BorderBox = styled.div<{ isBorder?: boolean }>`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;

  ${(props) =>
    props.isBorder
      ? css`
          border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
        `
      : null}
`;

const KebabBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 10;
`;

export { BorderBox, CheckIconBox, ExpranationText, InfoBox, TextBox, TodoItemBox, TodoText, KebabBox };
