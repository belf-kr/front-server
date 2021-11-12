import { oauthClient } from "../api-client";
import { name } from "../../package.json";
import axios from "axios";

type JWTToken = {
  accessToken: string;
  refreshToken: string;
};

type JWTRefreshToken = {
  refreshToken: string;
};

type UserDTO = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
};

type UserInfo = {
  id: number;
  email: string;
  name: string;
  avatarImage: string;
};

export type Config = {
  kakao: Kakao;
};

type Kakao = {
  restApiKey: string;
  redirectUri: string;
};

const accessTokenKey = `${name}-accessToken`;
const refreshTokenKey = `${name}-refreshToken`;

export function getLocalStorageAccessToken(): string {
  return localStorage.getItem(accessTokenKey);
}
export function setLocalStorageAccessToken(token: string): void {
  localStorage.setItem(accessTokenKey, token);
}
export function delLocalStorageAccessToken(): void {
  localStorage.removeItem(accessTokenKey);
}

function getLocalStorageRefreshToken() {
  return localStorage.getItem(refreshTokenKey);
}
export function setLocalStorageRefreshToken(token: string): void {
  localStorage.setItem(refreshTokenKey, token);
}
export function delLocalStorageRefreshToken(): void {
  localStorage.removeItem(refreshTokenKey);
}

export async function GetConfig(): Promise<Config> {
  try {
    const { data } = await oauthClient.get<Config>(`/configs`);
    return data;
  } catch (error) {
    throw new Error("GetConfig() 에러");
  }
}

export async function PostUser(user: UserDTO): Promise<void> {
  try {
    await oauthClient.post(`/users/signup`, user);
  } catch (error) {
    throw new Error("PostUser() 에러");
  }
}

export async function UserLogin(email: string, password: string): Promise<void> {
  try {
    const { data } = await oauthClient.post<JWTToken>(`/users/login`, {
      email: email,
      password: password,
    });
    setLocalStorageAccessToken(data.accessToken);
    setLocalStorageRefreshToken(data.refreshToken);
  } catch (error) {
    throw new Error("UserLogin() 에러");
  }
}

export async function GetUserInfo(): Promise<UserInfo> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    const { data } = await oauthClient.get<UserInfo>(`/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  }
  try {
    return await work();
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            // 재시도: 리프레쉬 토큰으로 엑세스 토큰을 다시 발급
            await TokenRefresh();
            return await work();
        }
      }
    }
    throw new Error("GetUserInfo() 에러");
  }
}

export async function TokenRefresh(): Promise<void> {
  try {
    const refreshToken = getLocalStorageRefreshToken();
    if (refreshToken === null) {
      throw new Error("refreshToken이 없습니다.");
    }
    const body: JWTRefreshToken = {
      refreshToken: refreshToken,
    };
    const { data } = await oauthClient.post<JWTToken>(`/users/token/refresh`, body);
    setLocalStorageAccessToken(data.accessToken);
    setLocalStorageRefreshToken(data.refreshToken);
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            // 리프레시 토큰이 만료된 경우 해당 에러는 무시합니다
            return;
        }
      }
    }
    throw new Error(`TokenRefresh() 에러: ${error}`);
  }
}

export async function UserLogout(): Promise<void> {
  try {
    const accessToken = getLocalStorageAccessToken();
    delLocalStorageAccessToken();
    delLocalStorageRefreshToken();
    await oauthClient.post(`/users/logout`, undefined, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            // 로그아웃한 토큰이 만료된 경우 해당 에러는 무시합니다: 그래서 로그아웃 요청전에 Client Side에서 미리 토큰을 지우도록 합니다.
            return;
        }
      }
    }
    throw new Error(`UserLogout() 에러: ${error}`);
  }
}
