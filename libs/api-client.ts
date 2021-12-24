import axios, { AxiosInstance } from "axios";

export const apiGatewayUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export const apiGatewayClient: AxiosInstance = axios.create({
  baseURL: `${apiGatewayUrl}`,
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

const storageUrl = process.env.NEXT_PUBLIC_STORAGE_SERVER_URL;

export const storageClient: AxiosInstance = axios.create({
  baseURL: `${storageUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
