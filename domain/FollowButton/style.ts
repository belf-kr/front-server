import styled from "styled-components";

import { ButtonType } from "../../types/style-type/follow-button";

const button = styled.button`
  display: inline-block;
  height: 36px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border: 1px solid ${({ theme }) => theme.lineColor.main};
  border-radius: 18px;
`;

const CircleBox = styled.div`
  display: block;
  height: 34px;
  width: 34px;
  position: relative;
  float: left;

  div {
    position: absolute;
    display: block;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.lineColor.main};
    top: -1px;
    left: -1px;
    padding: 7px 8px 8px 7px;
  }
`;

const CountBox = styled.div<{ type: ButtonType }>`
  display: block;
  padding: 10px 16px 10px 12px;
  float: left;
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${(props) => {
    return props.type == "belf" ? props.theme.brandColor.main : props.theme.activateColor.error;
  }};
`;

export { CircleBox, CountBox, button };
