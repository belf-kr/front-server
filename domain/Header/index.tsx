import { useState, useEffect } from "react";
import Button from "../../components/Button";
import BelfLogo from "../BelfLogo";
import SearchInput from "../SearchInput";
import ThemeChangeButton from "../ThemeChangeButton";
import * as S from "./style";
import { getLocalStorageAccessToken, UserLogout } from "../../libs/oauth";
import { useRouter } from "next/router";
import axios from "axios";

export default function Header(): JSX.Element {
  const [accessToken, setAccessToken] = useState<string>();
  const [error, setError] = useState<string>();

  const router = useRouter();

  useEffect(() => {
    const accessToken = getLocalStorageAccessToken();
    setAccessToken(accessToken);
  });

  async function handleAuth() {
    if (accessToken) {
      try {
        await UserLogout();
        window.location.href = window.location.origin;
      } catch (error) {
        if (error instanceof Error) {
          if (axios.isAxiosError(error)) {
            setError(error.response.data ?? error.message);
          }
          setError(error.message);
        }
        setError(error);
      }
    } else {
      router.push("/login");
    }
  }

  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

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
      <S.SearchBox>
        <SearchInput />
      </S.SearchBox>
      <div onClick={handleAuth}>
        <S.ButtonBox>
          <Button text={accessToken ? "로그아웃" : "로그인"} bg={"transparent"} />
        </S.ButtonBox>
      </div>
      <ThemeChangeButton />
    </S.Box>
  );
}
