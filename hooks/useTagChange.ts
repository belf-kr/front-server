import { useState } from "react";
import { Tag } from "../libs/type/CourseItem";

function useTagChange(): [Tag[], (value: Tag[]) => void] {
  const [value, setValue] = useState<Tag[]>([]);

  function handleOnChange(value: Tag[]): void {
    setValue(value);
  }

  return [value, handleOnChange];
}

export default useTagChange;
