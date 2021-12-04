import styled from "styled-components";

const UserImageBox = styled.div`
  width: 30px;
  aspect-ratio: 30 / 30;
  display: inline-block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  cursor: pointer;
`;

const Box = styled.div`
  position: relative;
  display: inline;
  float: right;
  margin: 0px 0px 0px 10px;
`;

const PopupBox = styled.div<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  position: absolute;
  top: 47px;
  right: -10px;
  width: 160px;
  padding: 10px 0px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: 6px;
  filter: ${({ theme }) => `drop-shadow(0px 0px 2px ${theme.backgroundColor.card})`};
  &:after {
    top: -24px;
    right: 14px;
    border: 12px solid transparent;
    border-bottom-color: ${({ theme }) => theme.backgroundColor.card};
    position: absolute;
    display: inline-block;
    content: "";
  }
`;

const PopupItem = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: transparent;
  text-align: left;
  color: ${({ theme }) => theme.fontColor.main};
  :hover {
    background-color: ${({ theme }) => theme.brandColor.main};
    color: #fbfdfe;
  }
`;

const PopupUserItem = styled(PopupItem)`
  color: ${({ theme }) => theme.brandColor.main};
  :hover {
    background-color: ${({ theme }) => theme.backgroundColor.card};
    color: ${({ theme }) => theme.brandColor.main};
  }
`;

const UserEmailText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: bold;
`;

const MenuText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
`;

const Line = styled.div`
  width: 100%;
  display: block;
  margin: 8px 0;
  border-top: 2px solid ${({ theme }) => theme.lineColor.main};
`;

const ButtonBox = styled.div`
  margin-left: 10px;
  float: right;
  > button {
    height: 30px;
    width: 60px;
    padding: 0;
  }
`;

export { Box, Line, MenuText, PopupBox, PopupItem, PopupUserItem, UserEmailText, UserImageBox, ButtonBox };
