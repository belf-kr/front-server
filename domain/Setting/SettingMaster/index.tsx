import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import { UserRemove, UsersAvatarRemove, UsersAvatarUpload } from "../../../libs/oauth";
import { deleteUserTodoData } from "../../../libs/todo";
import { loginUserState } from "../../../states/app";
import { imageDefault } from "../../UserPage/UserProfile";
import EditButton from "../EditButton";

import * as S from "./style";

export default function SettingMaster(): JSX.Element {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);

  const [isImgLoading, setIsImgLoading] = useState<boolean>();

  const router = useRouter();

  async function loadAvatar(event: any) {
    try {
      setIsImgLoading(true);
      const target = event.target as HTMLInputElement;
      const file = target.files[0];

      // 낙관론적 업데이트
      setLoginUser((prev) => {
        return {
          ...prev,
          avatarImage: URL.createObjectURL(file),
        };
      });

      await UsersAvatarUpload(file);
      setIsImgLoading(false);
    } catch (error) {
      alert("사용자 사진 업로드 중 에러: " + error);
    }
  }

  async function removeAvatar() {
    try {
      setIsImgLoading(true);
      // 낙관론적 업데이트
      setLoginUser((prev) => {
        return {
          ...prev,
          avatarImage: imageDefault,
        };
      });

      await UsersAvatarRemove();
      setIsImgLoading(false);
    } catch (error) {
      alert("사용자 사진 삭제 중 에러: " + error);
    }
  }

  async function removeUser() {
    try {
      await deleteUserTodoData();
      await UserRemove();
      router.replace("/");
    } catch (error) {
      alert("사용자 삭제 중 에러: " + error);
    }
  }

  return (
    <S.Box>
      <S.UserInfoBox>
        <S.UserImageBox>
          {isImgLoading ? (
            <>
              <Loading width="140px" height="140px" />
            </>
          ) : (
            <img src={loginUser.avatarImage ? loginUser.avatarImage : imageDefault} />
          )}
          <S.ImageEditButtonBox>
            <EditButton
              menuItems={[
                {
                  showText: "이미지 업로드",
                  onClick() {
                    const image = document.querySelector("#chooseFile");
                    const ev = new MouseEvent("click", { bubbles: true });
                    image.dispatchEvent(ev);
                  },
                },
                {
                  showText: "이미지 삭제",
                  onClick() {
                    removeAvatar();
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
          <S.OptionButtonBox>
            <Button
              text="회원 탈퇴"
              bg="#FF5446"
              onClick={() => {
                const result = confirm("회원 탈퇴를 진행하시겠습니까? 탈퇴 후 데이터는 복구할 수 없습니다.");
                if (result) {
                  removeUser();
                }
              }}
            />
          </S.OptionButtonBox>
        </S.SettingOptionBox>
      </S.SettingOptionListBox>
      <input type="file" id="chooseFile" name="chooseFile" accept="image/*" style={{ display: "none" }} onChange={loadAvatar} />
    </S.Box>
  );
}
