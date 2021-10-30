import axios, { AxiosInstance } from "axios";

const host = `https://api-gateway.qa.belf.xyz`;

export const client: AxiosInstance = axios.create({
  baseURL: `${host}/todo`,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
