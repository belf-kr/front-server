import React, { useState } from "react";
import * as S from "./style";
import KakaoIcon from "../../../icons/KakaoIcon";
import Button from "../../../components/Button";
import BelfLogo from "../../BelfLogo";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { configState } from "../../../states/app";
import useOnChange from "../../../hooks/useOnChange";
import { UserLogin } from "../../../libs/oauth";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignInForm(): JSX.Element {
  const config = useRecoilValue(configState);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, handleEmail] = useOnChange();
  const [password, handlePassword] = useOnChange();

  const router = useRouter();

  function handleKakaoLogin() {
    const clientId = config.kakao.restApiKey;
    const redirectUri = config.kakao.redirectUri;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  }

  async function handleLogin() {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      await UserLogin(email, password);
      router.replace(`/${email}`);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
            case 401:
            case 422:
            case 500:
              alert(error.response.data.message);
              return;
            case 404:
              alert("존재하지 않는 계정 입니다.");
              return;
          }
        }
      }
      alert(error);
    }
  }

  return (
    <>
      <S.TitleBox>
        <BelfLogo />
        <S.TitleText>로그인</S.TitleText>
      </S.TitleBox>
      <S.SignBox>
        <S.SubTitleBox>
          <S.SubTitle>* 이메일</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="이메일" onChange={handleEmail} />
        <S.PasswordBox isVisible={isVisible}>
          <S.SubTitleBox>
            <S.SubTitle>* 비밀번호</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultInput type="password" placeholder="비밀번호" onChange={handlePassword} />
        </S.PasswordBox>
        <div onClick={isVisible ? handleLogin : undefined}>
          <S.ButtonBox
            onClick={(e) => {
              if (email) {
                setIsVisible(true);
              } else {
                alert("email을 입력해주세요.");
                e.stopPropagation();
              }
            }}
          >
            <Button text={isVisible ? "로그인" : "다음"} />
          </S.ButtonBox>
        </div>
        <S.ButtonBox>
          <div onClick={handleKakaoLogin}>
            <Button
              Icon={
                <S.IconBox>
                  <KakaoIcon />
                </S.IconBox>
              }
              text={"카카오 로그인"}
              bg={"#fbe400"}
              fontColor={"#3b1e1e"}
            />
          </div>
        </S.ButtonBox>
      </S.SignBox>
      <Link href="/register" passHref={true}>
        <S.SingUpLabel>회원가입</S.SingUpLabel>
      </Link>
    </>
  );
}
