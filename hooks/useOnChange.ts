import { ChangeEvent, useState } from "react";

export default function useOnChange(): [string, (e: ChangeEvent<any>) => void] {
  const [value, setValue] = useState("");

  function handleOnChange(e: ChangeEvent<any>): void {
    const result = e.target.value;
    setValue(result);
  }

  return [value, handleOnChange];
}
