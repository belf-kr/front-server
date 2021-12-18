import { useState, useEffect, ReactNode } from "react";
import { useSetRecoilState } from "recoil";
import { getLocalStorageAccessToken, getLocalStorageRefreshToken, GetUserInfoTokenQuey } from "../libs/oauth";
import { loginUserState } from "../states/app";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  children: ReactNode;
};

export default function LoginUser({ children }: Props): JSX.Element {
  const setLoginUser = useSetRecoilState(loginUserState);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = getLocalStorageAccessToken();
        const refreshToken = getLocalStorageRefreshToken();

        if (!accessToken && !refreshToken) {
          setLoginUser(null);
          return;
        }

        const res = await GetUserInfoTokenQuey();
        setLoginUser(res);
      } catch (error) {
        // 토큰이 만료되거나 로그인되지 않는 사용자로 판단: 의도적으로 예외를 무시합니다.
        setLoginUser(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [window.location.href]);

  if (isLoading) {
    return (
      <>
        <LoadingSpinner width="100%" height="100%" message="사용자 정보 가져오는 중..." />
      </>
    );
  }

  return <>{children}</>;
}
