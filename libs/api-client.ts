import axios, { AxiosInstance } from "axios";

const apiGatewayUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${apiGatewayUrl}/todo`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

const oauthUrl = process.env.NEXT_PUBLIC_OAUTH_SERVER_URL;

export const oauthClient: AxiosInstance = axios.create({
  baseURL: `${oauthUrl}/api`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
