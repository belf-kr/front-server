// import { client } from "../api-client";

import { Glass } from "../../types/components-type/planting-glass";

import plantingGlass from "../../data/plantingGlass.json";

export async function getPlantingGlass(): Promise<Glass[]> {
  // const { data } = await client.get<Glass[]>(`/planting-glass`);
  const temp: Glass[] = [];

  plantingGlass.forEach((dateItem) => {
    temp.push({ date: String(dateItem.date), count: dateItem.count });
  });

  return temp;
}
