import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";
import axios from "axios";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import { UserLogout } from "../../../libs/oauth";
import { imageDefault } from "../../UserPage/UserProfile";
import Loading from "../../../components/Loading";
import { useRecoilValue } from "recoil";
import { loginUserState } from "../../../states/app";

export default function UserProfile(): JSX.Element {
  const userInfo = useRecoilValue(loginUserState);

  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const modalEl = useRef<HTMLDivElement>(null);
  const router = useRouter();

  async function handleLogout() {
    try {
      await UserLogout();
      window.location.href = window.location.origin;
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          setError(error.response.data ?? error.message);
          return;
        }
        setError(error.message);
        return;
      }
      setError(error);
    }
  }

  function handleClickOutside({ target }: any) {
    if (modalEl.current) {
      if (!modalEl.current?.contains(target)) {
        setIsOpenPopup(false);
      }
    }
  }

  // 이벤트 바인딩
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // 에러 발생 시
  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

  // 로딩 중
  if (userInfo === undefined) {
    return (
      <>
        <S.Box>
          <Loading width="30px" height="30px" />
        </S.Box>
      </>
    );
  }

  // 로그인 되어있지 않음
  if (userInfo === null) {
    return (
      <>
        <S.ButtonBox
          onClick={() => {
            router.push("/login");
          }}
        >
          <Button text={"로그인"} bg={"transparent"} />
        </S.ButtonBox>
      </>
    );
  }

  // 프로필 사진 표시: 로딩이 끝나면 프로필 사진이 있거나 없거나 둘 중 하나임
  if (userInfo) {
    return (
      <S.Box ref={modalEl}>
        <S.UserImageBox
          onClick={() => {
            setIsOpenPopup(!isOpenPopup);
          }}
        >
          <img src={userInfo.avatarImage ? userInfo.avatarImage : imageDefault} />
        </S.UserImageBox>
        <S.PopupBox isOpen={isOpenPopup}>
          <div
            onClick={() => {
              setIsOpenPopup(false);
              router.push(`/${userInfo.email}`);
            }}
          >
            <S.PopupUserItem>
              <S.UserEmailText>{userInfo.name}</S.UserEmailText>
            </S.PopupUserItem>
          </div>
          <S.Line />
          <div
            onClick={() => {
              setIsOpenPopup(false);
              router.push("/setting");
            }}
          >
            <S.PopupItem>
              <S.MenuText>설정</S.MenuText>
            </S.PopupItem>
          </div>
          <S.Line />
          <S.PopupItem onClick={handleLogout}>
            <S.MenuText>로그아웃</S.MenuText>
          </S.PopupItem>
        </S.PopupBox>
      </S.Box>
    );
  }
}
