import { useEffect, useState } from "react";

import * as S from "./style";

import { getColors } from "../../../libs/colors";

type props = {
  colorOnChange: (value: string) => void;
};

export default function SelectCourseColor({ colorOnChange }: props): JSX.Element {
  const [courseColors, setCourseColors] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await getColors();
      setCourseColors(res);
      setCurrentColor(res[0]);
    })();
    return () => setCourseColors([]);
  }, []);

  useEffect(() => {
    colorOnChange(currentColor);
  }, [currentColor]);

  if (courseColors.length === 0) {
    return (
      <>
        <h4>컬러 정보가 없습니다.</h4>
      </>
    );
  }

  return (
    <>
      {courseColors.map((color, index) => {
        return (
          <S.ColorInput
            type="radio"
            color={color}
            value={color}
            name="color"
            key={index}
            checked={currentColor == color}
            onChange={() => setCurrentColor(color)}
          />
        );
      })}
    </>
  );
}
