import { atom } from "recoil";
import { Config } from "../libs/oauth";

export const themeState = atom({
  key: "themeState",
  default: "dark",
});

export const configState = atom<undefined | Config>({
  key: "configState",
  default: undefined,
});
