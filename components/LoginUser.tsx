import { useState, useEffect, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  children: ReactNode;
};

export default function LoginUser({ children }: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <>
        <LoadingSpinner width="100%" height="100%" message="사용자 정보 가져오는 중..." />
      </>
    );
  }

  return <>{children}</>;
}
