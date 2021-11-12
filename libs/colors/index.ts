import { apiClient } from "../api-client";

export async function getColors(): Promise<string[]> {
  const { data } = await apiClient.get<string[]>(`/colors`);
  return data;
}
