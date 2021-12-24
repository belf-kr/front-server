import styled from "styled-components";

const Image = styled.img`
  width: 100px;
  float: left;
  border-radius: 10px;
`;

const ImagePreviewBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageNameText = styled.a`
  color: ${({ theme }) => theme.fontColor.sub};
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  margin: auto 0px;
  white-space: nowrap;
`;

export { Image, ImageInput, ImageNameText, ImagePreviewBox };
