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

/**
 * 로그인한 사용자 정보입니다.
 */
export const loginUserState = atom<undefined | null | UserInfo>({
  key: "loginUserState",
  default: undefined,
});

/**
 * 페이지에 쿼리된 사용자 정보입니다. (url에 쿼리된 email를 기반으로 합니다)
 */
export const queryStringUserState = atom<undefined | UserInfo>({
  key: "queryStringUserState",
  default: undefined,
});

/**
 * 페이지에 쿼리된 사용자 정보와 로그인한 사용자의 token을 확인하여 권한 유무를 나타내는 상태입니다. 쿼리된 페이지가 로그인한 사용자의 페이지에 따라 기능 활성화 여부로 사용됩니다.
 */
export const isPermissionState = atom<boolean>({
  key: "isPermissionState",
  default: false,
});
