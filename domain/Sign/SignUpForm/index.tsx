import React from "react";

import * as S from "./style";

import Button from "../../../components/Button";
import BelfLogo from "../../BelfLogo";

export default function SignUpFormSignUpForm(): JSX.Element {
  return (
    <>
      <S.TitleBox>
        <BelfLogo />
        <S.TitleText>회원가입</S.TitleText>
      </S.TitleBox>
      <S.SignBox>
        <S.SubTitleBox>
          <S.SubTitle>닉네임</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="닉네임" />
        <S.SubTitleBox>
          <S.SubTitle>이메일</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="이메일" />
        <S.SubTitleBox>
          <S.SubTitle>비밀번호</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="password" placeholder="비밀번호" />
        <S.SubTitleBox>
          <S.SubTitle>비밀번호 재입력</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="password" placeholder="비밀번호 재입력" />
        <S.ButtonBox>
          <Button text={"회원가입"} />
        </S.ButtonBox>
      </S.SignBox>
    </>
  );
}
