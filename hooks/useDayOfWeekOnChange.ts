import { useState } from "react";

export default function useDayOfWeekOnChange(): [boolean[], (value: boolean[]) => void] {
  const [value, setValue] = useState<boolean[]>();

  function handleOnChange(value: boolean[]): void {
    setValue(value);
  }

  return [value, handleOnChange];
}
