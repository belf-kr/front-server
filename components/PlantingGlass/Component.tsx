import React from "react";
import { useRecoilValue } from "recoil";
import { countAvg, platingGlass2dArray } from "../../states/plantingGlass";
import { default as S } from "../../styles/PlantingGlass";
import { Glass } from "../../utils/type/plantingGlass";

const colorGenerator = (avg: number, value: number): string => {
  if (value === 0) {
    return "#EBEDF0";
  } else if (value <= avg / 2) {
    return "#FFEDE2";
  } else if (value <= avg) {
    return "#FFD0B1";
  } else if (value <= avg + avg / 2) {
    return "#FF9E5F";
  } else {
    return "#FF8433";
  }
};

function Component(): JSX.Element {
  const array = useRecoilValue(platingGlass2dArray);
  const avg = useRecoilValue(countAvg);

  return (
    <S.Card>
      <S.Grid>
        {array.map((e: Glass[], i: number) => (
          <S.WeekItem key={"i_" + i}>
            <S.WeekGrid key={"g_" + i}>
              {e.map((item: Glass, j: number) => (
                <S.DayItem key={i + "-" + j} color={colorGenerator(avg, item.count)} id={item.date} />
              ))}
            </S.WeekGrid>
          </S.WeekItem>
        ))}
      </S.Grid>
    </S.Card>
  );
}
export default Component;
