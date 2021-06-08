// import axios from "axios";

import colors from "../../data/colors.json";

async function getColors(): Promise<string[]> {
  try {
    // const res = await axios.get("url");
    // const json: TodoItem[] = await res.data;
    const json: string[] = colors.color_list;

    return json;
  } catch (e) {
    return [];
  }
}

export default getColors;
