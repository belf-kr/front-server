import { apiGatewayClient } from "../api-client";

export async function getColors(): Promise<string[]> {
  const { data } = await apiGatewayClient.get<string[]>(`/todo/colors`);
  return data;
}
