import React, { useState } from "react";
import * as S from "./style";
import KakaoIcon from "../../../icons/KakaoIcon";
import Button from "../../../components/Button";
import BelfLogo from "../../BelfLogo";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { configState } from "../../../states/app";

export default function SignInForm(): JSX.Element {
  const config = useRecoilValue(configState);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleKakaoLogin() {
    const clientId = config.kakao.restApiKey;
    const redirectUri = config.kakao.redirectUri;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  }

  return (
    <>
      <S.TitleBox>
        <BelfLogo />
        <S.TitleText>로그인</S.TitleText>
      </S.TitleBox>
      <S.SignBox>
        <S.SubTitleBox>
          <S.SubTitle>이메일</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="이메일" />
        <S.PasswordBox isVisible={isVisible}>
          <S.SubTitleBox>
            <S.SubTitle>비밀번호</S.SubTitle>
          </S.SubTitleBox>
          <S.DefaultInput type="password" placeholder="비밀번호" />
        </S.PasswordBox>
        <S.ButtonBox onClick={() => setIsVisible(true)}>
          <Button text={isVisible ? "로그인" : "다음"} />
        </S.ButtonBox>
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
