import styled, { css } from "styled-components";

const ButtonBox = styled.button<{ bg?: string }>`
  padding: 12px 20px 8px 20px;
  width: 100%;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${(props) =>
    props.bg != undefined
      ? props.bg
      : css`
          ${({ theme }) => theme.brandColor.main};
        `};
`;

const ContentsBox = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;

  vertical-align: baseline;
  > div {
    float: left;
  }
`;

const TextBox = styled.a<{ fontColor?: string }>`
  float: left;
  color: ${({ theme }) => theme.fontColor.main};
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${(props) =>
    props.fontColor != undefined
      ? props.fontColor
      : css`
          ${({ theme }) => theme.fontColor.main};
        `};
`;

export { ButtonBox, TextBox, ContentsBox };
