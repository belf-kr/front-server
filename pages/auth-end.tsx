import { useRouter } from "next/router";
import {
  setLocalStorageAccessToken,
  setLocalStorageRefreshToken,
  getLocalStorageAccessToken,
  delLocalStorageAccessToken,
  delLocalStorageRefreshToken,
  GetUserInfoTokenQuey,
} from "../libs/oauth";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AuthEnd(): JSX.Element {
  const [error, setError] = useState<string>();

  const router = useRouter();

  const queryString = new URLSearchParams(window.location.search);
  const accessToken = queryString.get("accessToken");
  const refreshToken = queryString.get("refreshToken");

  if (accessToken === null || refreshToken === null) {
    return (
      <>
        <h3>토큰이 정상적으로 발급되지 않았습니다.</h3>
      </>
    );
  }

  setLocalStorageAccessToken(accessToken);
  setLocalStorageRefreshToken(refreshToken);

  useEffect(() => {
    (async () => {
      const accessToken = getLocalStorageAccessToken();
      if (accessToken) {
        try {
          const res = await GetUserInfoTokenQuey();
          router.replace(`/${res.email}`);
        } catch (error) {
          if (error instanceof Error) {
            if (axios.isAxiosError(error)) {
              switch (error.response?.status) {
                case 401:
                  // refresh token도 만료된 상태입니다: 사용자가 다시 로그인해야되는 시점
                  delLocalStorageAccessToken();
                  delLocalStorageRefreshToken();
                  window.location.reload();
                  break;
              }
            }
          }
          setError(error);
        }
      }
    })();
  }, []);

  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

  return (
    <>
      <h3>로그인 처리 중...</h3>
    </>
  );
}
