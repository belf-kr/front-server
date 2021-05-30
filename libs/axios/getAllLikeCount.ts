// import axios from "axios";

import allLikeCount from "../../data/allLikeCount.json";

async function getAllLikeCount(): Promise<number> {
  try {
    // const res = await axios.get("url");
    // const json: number = await res.data;
    const json: number = allLikeCount.total_like_count;

    return json;
  } catch (e) {
    return;
  }
}

export default getAllLikeCount;
