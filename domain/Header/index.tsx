import React from "react";
import Link from "next/link";

import Button from "../../components/Button";
import BelfLogo from "../BelfLogo";
import SearchInput from "../SearchInput";
import ThemeChangeButton from "../ThemeChangeButton";

import * as S from "./style";

export default function Header(): JSX.Element {
  return (
    <S.Box>
      <S.BelfLogoBox>
        <BelfLogo />
      </S.BelfLogoBox>
      <S.SearchBox>
        <SearchInput />
      </S.SearchBox>
      <Link href="/login" passHref={true}>
        <S.ButtonBox>
          <Button text={"로그인"} bg={"transparent"} />
        </S.ButtonBox>
      </Link>
      <ThemeChangeButton />
    </S.Box>
  );
}
