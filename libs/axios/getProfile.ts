// import axios from "axios";

import userProfile from "../../data/userInfo.json";

import UserProfile from "../type/UserProfile";

async function getUserInfo(): Promise<UserProfile> {
  try {
    // const res = await axios.get("url");
    // const json: CourseItem[] = await res.data;
    const json: UserProfile = userProfile.user;

    return json;
  } catch (e) {
    return null;
  }
}

export default getUserInfo;
