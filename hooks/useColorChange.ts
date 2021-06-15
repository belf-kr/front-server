import { useState } from "react";

function useColorChange(): [string, (value: string) => void] {
  const [value, setValue] = useState<string>("");

  function handleOnChange(value: string): void {
    setValue(value);
  }

  return [value, handleOnChange];
}

export default useColorChange;
