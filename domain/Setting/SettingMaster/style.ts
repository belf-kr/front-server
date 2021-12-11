import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  height: 160px;
  @media only screen and (max-width: 740px) {
    flex-direction: column;
    row-gap: 10px;
    height: auto;
  }
`;

const UserImageBox = styled.div`
  position: relative;
  width: 140px;
  height: 160px;
  aspect-ratio: 140 / 140;
  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
  }
  @media only screen and (max-width: 740px) {
    margin: auto;
  }
`;

const UserNameText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  line-height: 24px;
`;

const UserProfileBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: 10px;
  padding: 40px 20px;
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s800}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
  margin-top: 10px;
`;

const Introduction = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.sub};
  margin-top: 16px;
`;

const ImageEditButtonBox = styled.div`
  position: absolute;
  margin-left: auto;
  bottom: 0px;
  transform: translateX(-50%);
  width: 60px;
  left: 50%;
`;

const Line = styled.div`
  width: 100%;
  display: block;
  margin: 36px 0px;
  border-top: 2px solid ${({ theme }) => theme.lineColor.main};
`;

const SettingOptionListBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const SettingOptionBox = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  line-height: 30px;
`;

const OptionTitleText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s500}px;
`;

const OptionButtonBox = styled.div`
  > button {
    width: 100px;
    padding: 5px 12px 3px 12px;
    background-color: ${({ theme }) => theme.activateColor.error}px;
  }
  flex: 1;
`;

export {
  Box,
  UserImageBox,
  UserInfoBox,
  UserNameText,
  UserProfileBox,
  Introduction,
  UserName,
  ImageEditButtonBox,
  Line,
  SettingOptionBox,
  SettingOptionListBox,
  OptionTitleText,
  OptionButtonBox,
};
