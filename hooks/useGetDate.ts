import { useState } from "react";

export default function useGetDate(): [Date, (key: Date) => void] {
  const [value, setValue] = useState<Date>(new Date(Date.now()));

  function handle(key: Date): void {
    setValue(key);
  }

  return [value, handle];
}
