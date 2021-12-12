import React, { ReactNode, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { configState } from "../states/app";
import { GetConfig } from "../libs/oauth";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  children: ReactNode;
};

export default function AppInit({ children }: Props): JSX.Element {
  const [config, setConfig] = useRecoilState(configState);
  const [error, setError] = useState<string>();

  async function handleGetConfig() {
    try {
      const res = await GetConfig();
      setConfig(res);
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          setError(error.response.data ?? error.message);
        }
        setError(error.message);
      }
      setError(error);
    }
  }

  useEffect(() => {
    handleGetConfig();
  }, []);

  if (error) {
    return (
      <>
        <h3>{error}</h3>
      </>
    );
  }

  if (!config) {
    return (
      <>
        <LoadingSpinner width="100%" height="100%" message="앱에 필요한 설정 로드 중..." />
      </>
    );
  }

  return <>{children}</>;
}
