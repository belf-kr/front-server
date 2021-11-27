import { useState } from "react";
import { EditNode } from "../types/components-type/editer";

export default function useGetEditNodeList(): [EditNode[], (key: EditNode[]) => void] {
  const [value, setValue] = useState<EditNode[]>([]);

  function handle(key: EditNode[]): void {
    setValue(key);
  }

  return [value, handle];
}
