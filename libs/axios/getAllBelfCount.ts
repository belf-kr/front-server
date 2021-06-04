// import axios from "axios";

import allBelfCount from "../../data/allBelfCount.json";

async function getAllBelfCount(): Promise<number> {
  try {
    // const res = await axios.get("url");
    // const json: number = await res.data;
    const json: number = allBelfCount.total_belf_count;

    return json;
  } catch (e) {
    return;
  }
}

export default getAllBelfCount;
