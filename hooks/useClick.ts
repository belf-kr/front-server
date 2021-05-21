import { RefObject, useEffect, useRef } from "react";

function useClick(onClick: () => void): RefObject<HTMLDivElement> {
  const element: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  });
  return element;
};

export default useClick;
