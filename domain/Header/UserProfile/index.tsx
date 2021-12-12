import React, { useState, useEffect, useRef } from "react";

import * as S from "./style";
import axios from "axios";
import Button from "../../../components/Button";
import { getLocalStorageAccessToken, GetUserInfoTokenQuey, UserInfo } from "../../../libs/oauth";
import { useRouter } from "next/router";
import { UserLogout } from "../../../libs/oauth";
import { imageDefault } from "../../UserPage/UserProfile";
import Loading from "../../../components/Loading";

export default function UserProfile(): JSX.Element {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>();
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

  // token이 변한다는 것은 새롭게 로그인되었거나 로그인이 만료됨을 의미하여 하나의 이벤트로 처리하기 위해서 리렌더링하마다 상태로 저장함
  useEffect(() => {
    const accessToken = getLocalStorageAccessToken();
    setAccessToken(accessToken);
  });

  // token이 변할 때 마다 사용자 조회: 그렇지 않으면 로그인 후 마이 대쉬보드로 이동할 때 이멘트를 캐치할 수 없음
  useEffect(() => {
    (async () => {
      try {
        // 일단 미리 로딩화면 보여줌
        setIsLoading(true);
        // 사용자 조회
        const res = await GetUserInfoTokenQuey();
        setUserInfo(res);
      } catch (error) {
        // 토큰이 만료되거나 로그인되지 않는 사용자로 판단: 의도적으로 예외를 무시합니다.
      } finally {
        setIsLoading(false);
      }
    })();
  }, [accessToken]);

  // 이멘트 바인딩
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
  if (isLoading) {
    return (
      <>
        <S.Box>
          <Loading width="30px" height="30px" />
        </S.Box>
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

  // 로그인 되어있지 않음: 기본 값
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
