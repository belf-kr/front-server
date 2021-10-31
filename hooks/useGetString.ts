import { useState } from "react";

export default function useGetString(): [string, (key: string) => void] {
  const [value, setValue] = useState<string>("");

  function handle(key: string): void {
    setValue(key);
  }

  return [value, handle];
}
