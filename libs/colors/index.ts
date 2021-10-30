import { client } from "../api-client";

export async function getColors(): Promise<string[]> {
  const { data } = await client.get<string[]>(`/colors`);
  return data;
}
