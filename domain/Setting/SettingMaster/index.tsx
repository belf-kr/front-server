import React from "react";
import { useRecoilValue } from "recoil";
import Button from "../../../components/Button";
import { loginUserState } from "../../../states/app";
import { imageDefault } from "../../UserPage/UserProfile";
import EditButton from "../EditButton";

import * as S from "./style";

export default function SettingMaster(): JSX.Element {
  const loginUser = useRecoilValue(loginUserState);

  return (
    <S.Box>
      <S.UserInfoBox>
        <S.UserImageBox>
          <img src={loginUser.avatarImage ? loginUser.avatarImage : imageDefault} />
          <S.ImageEditButtonBox>
            <EditButton
              menuItems={[
                {
                  showText: "이미지 업로드",
                  onClick: () => {
                    console.log("이미지 업로드 이벤트");
                  },
                },
                {
                  showText: "이미지 삭제",
                  onClick: () => {
                    console.log("이미지 삭제 이벤트");
                  },
                },
              ]}
            />
          </S.ImageEditButtonBox>
        </S.UserImageBox>
        <S.UserProfileBox>
          <S.UserName>{loginUser.name}</S.UserName>
          <S.Introduction>{loginUser.email}</S.Introduction>
        </S.UserProfileBox>
      </S.UserInfoBox>
      <S.Line />
      <S.SettingOptionListBox>
        <S.SettingOptionBox>
          <S.OptionTitleText>회원탈퇴</S.OptionTitleText>
          <S.OptionButtonBox>
            <Button
              text="회원탈퇴"
              bg="#FF5446"
              onClick={() => {
                console.log("회원탈퇴 이벤트");
              }}
            />
          </S.OptionButtonBox>
        </S.SettingOptionBox>
      </S.SettingOptionListBox>
    </S.Box>
  );
}
