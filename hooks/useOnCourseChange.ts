import { useState } from "react";

function useOnCourseChange(): [number, (value: number) => void] {
  const [value, setValue] = useState<number>(-1);

  function handleOnChange(value: number): void {
    setValue(value);
  }

  return [value, handleOnChange];
}

export default useOnCourseChange;
