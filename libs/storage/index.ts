import axios, { AxiosResponse } from "axios";
import { storageClient } from "../api-client";
import { getLocalStorageAccessToken, TokenRefresh } from "../oauth";

export async function postFile(file: File, onUploadProgress: (progressEvent: any) => void): Promise<AxiosResponse<any>> {
  async function work() {
    const accessToken = getLocalStorageAccessToken();
    const config = {
      onUploadProgress: onUploadProgress,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": file.type,
      },
    };

    const res = await storageClient.post("/upload", file, config);
    return res;
  }
  try {
    return await work();
  } catch (error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 401:
            await TokenRefresh();
            return await work();
        }
      }
    }
    throw new Error("postFile() 에러");
  }
}
