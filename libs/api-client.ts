import axios, { AxiosInstance } from "axios";

const host = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export const client: AxiosInstance = axios.create({
  baseURL: `${host}/todo`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
