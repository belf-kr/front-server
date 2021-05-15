import axios from "axios";
import { DateTime, Glass } from "../type/plantingGlass";

const getPlantingGlass = async (): Promise<Glass[]> => {
  try {
    const res = await axios.get("http://localhost:3001/1/glass");
    const json: DateTime[] = await res.data;

    const glass: Glass[] = json.map(
      (e: DateTime): Glass => {
        const dayOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const dt = new Date(e.date);
        const y = dt.getFullYear();
        const m = dt.getMonth() + 1;
        const d = dt.getDate();
        const dw = dt.getDay();
        return { date: `${y}-${m}-${d} (${dayOfWeek[dw]})`, count: e.count };
      }
    );
    return glass;
  } catch (e) {
    return [];
  }
};

export default getPlantingGlass;