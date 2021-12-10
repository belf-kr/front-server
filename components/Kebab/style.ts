import styled from "styled-components";

const Box = styled.div`
  position: relative;
  width: 20px;
  cursor: pointer;
  margin-left: auto;
  display: inline-block;
`;

const PopupBox = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  position: absolute;
  width: 100px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  border: 1px solid ${({ theme }) => theme.lineColor.main};
  right: 0px;
  padding: 4px 0px;
`;

const PopupItemButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.fontColor.main};
  :hover {
    color: ${({ theme }) => theme.brandColor.main};
  }
`;

const MenuText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
`;

export { Box, MenuText, PopupBox, PopupItemButton };
