import { atom } from "recoil";
import { Config, UserInfo } from "../libs/oauth";

export const themeState = atom({
  key: "themeState",
  default: "dark",
});

export const configState = atom<undefined | Config>({
  key: "configState",
  default: undefined,
});

export const userInfoState = atom<undefined | UserInfo>({
  key: "userInfoState",
  default: undefined,
});
