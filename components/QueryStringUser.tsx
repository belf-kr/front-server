import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { GetUserInfoEmailQuey, GetUserInfoTokenQuey } from "../libs/oauth";
import { isPermissionState, userInfoState } from "../states/app";

type Props = {
  children: ReactNode;
};

export default function QueryStringUser({ children }: Props): JSX.Element {
  const [error, setError] = useState<string>();
  const [isNotFoundUser, setIsNotFoundUser] = useState<boolean>();

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const setIsPermissionState = useSetRecoilState(isPermissionState);

  const router = useRouter();
  const { userEmail } = router.query;

  useEffect(() => {
    if (userEmail === undefined) {
      return;
    }
    (async () => {
      try {
        const userInfo = await GetUserInfoEmailQuey(userEmail as string);
        setUserInfo(userInfo);
        try {
          const verifiedUser = await GetUserInfoTokenQuey();
          if (userInfo.email === verifiedUser.email) {
            setIsPermissionState(true);
          }
        } catch (error) {
          // 어떤 오류던 간에 token 기반 사용자 인증에 실패하면 권한이 없는 것으로 간주합니다.
        }
      } catch (error) {
        if (error instanceof Error) {
          if (axios.isAxiosError(error)) {
            switch (error.response?.status) {
              case 404:
                setIsNotFoundUser(true);
                break;
            }
          }
          setError(error.message);
          return;
        }
        setError(error);
      }
    })();
  }, [router]);

  if (isNotFoundUser) {
    return (
      <>
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <h3>앗! 존재하지 않는 사용자 입니다.</h3>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

  if (userInfo) {
    return <>{children}</>;
  }

  return (
    <>
      <h3>사용자 확인 중...</h3>
    </>
  );
}
