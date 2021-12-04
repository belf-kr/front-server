import React from "react";
import BelfLogo from "../BelfLogo";
import SearchInput from "../SearchInput";
import ThemeChangeButton from "../ThemeChangeButton";
import * as S from "./style";
import { useRouter } from "next/router";
import UserProfile from "./UserProfile";

export default function Header(): JSX.Element {
  const router = useRouter();
  return (
    <S.Box>
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        <S.BelfLogoBox>
          <BelfLogo />
        </S.BelfLogoBox>
      </div>
      <UserProfile />
      <S.SearchBox>
        <SearchInput />
      </S.SearchBox>
      <ThemeChangeButton />
    </S.Box>
  );
}
