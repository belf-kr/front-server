import { useState } from "react";
import { CourseItem } from "../types/components-type/course";

export default function useCourseOnChange(): [CourseItem, (value: CourseItem) => void] {
  const [value, setValue] = useState<CourseItem>();

  function handleOnChange(value: CourseItem): void {
    setValue(value);
  }

  return [value, handleOnChange];
}
