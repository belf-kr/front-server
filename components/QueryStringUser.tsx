import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { GetUserInfoEmailQuey } from "../libs/oauth";
import { isPermissionState, loginUserState, queryStringUserState } from "../states/app";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  children: ReactNode;
};

export default function QueryStringUser({ children }: Props): JSX.Element {
  const loginUser = useRecoilValue(loginUserState);
  const [queryStringUser, setQueryStringUser] = useRecoilState(queryStringUserState);
  const setIsPermissionState = useSetRecoilState(isPermissionState);

  const [error, setError] = useState<string>();
  const [isNotFoundUser, setIsNotFoundUser] = useState<boolean>();

  const router = useRouter();
  const { userEmail } = router.query;

  useEffect(() => {
    if (userEmail === undefined) {
      return;
    }
    (async () => {
      try {
        const userInfo = await GetUserInfoEmailQuey(userEmail as string);
        setQueryStringUser(userInfo);
        if (userInfo.email === loginUser?.email) {
          setIsPermissionState(true);
        } else {
          setIsPermissionState(false);
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
            width: "100%",
            height: "100%",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
            }}
          >
            앗! {userEmail} 는 존재하지 않는 사용자 입니다.
          </span>
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

  if (queryStringUser) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingSpinner width="100%" height="100%" message="사용자 정보 조회 중..." />
    </>
  );
}
