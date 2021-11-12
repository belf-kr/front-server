import React from "react";
import * as S from "./style";
import Button from "../../../components/Button";
import BelfLogo from "../../BelfLogo";
import useOnChange from "../../../hooks/useOnChange";
import { PostUser, UserLogin } from "../../../libs/oauth";
import { useRouter } from "next/router";
import axios from "axios";

export default function SignUpFormSignUpForm(): JSX.Element {
  const [email, handleEmail] = useOnChange();
  const [password, handlePassword] = useOnChange();
  const [passwordConfirm, handlePasswordConfirm] = useOnChange();
  const [name, handleName] = useOnChange();

  const router = useRouter();

  async function handleSignUp() {
    try {
      await PostUser({ name, email, password, passwordConfirm });
      await UserLogin(email, password);
      router.replace(`/${email}`);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
            case 409:
              alert(error.response.data.message);
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
        <S.TitleText>회원가입</S.TitleText>
      </S.TitleBox>
      <S.SignBox>
        <S.SubTitleBox>
          <S.SubTitle>닉네임</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="닉네임" onChange={handleName} />
        <S.SubTitleBox>
          <S.SubTitle>이메일</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="text" placeholder="이메일" onChange={handleEmail} />
        <S.SubTitleBox>
          <S.SubTitle>비밀번호</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="password" placeholder="비밀번호" onChange={handlePassword} />
        <S.SubTitleBox>
          <S.SubTitle>비밀번호 재입력</S.SubTitle>
        </S.SubTitleBox>
        <S.DefaultInput type="password" placeholder="비밀번호 확인" onChange={handlePasswordConfirm} />
        <S.ButtonBox onClick={handleSignUp}>
          <Button text={"회원가입"} />
        </S.ButtonBox>
      </S.SignBox>
    </>
  );
}
