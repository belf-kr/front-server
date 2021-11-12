import { useState } from "react";
import { Tag } from "../types/components-type/course";

export default function useTagOnChange(): [Tag[], (value: Tag[]) => void] {
  const [value, setValue] = useState<Tag[]>([]);

  function handleOnChange(value: Tag[]): void {
    setValue(value);
  }

  return [value, handleOnChange];
}
