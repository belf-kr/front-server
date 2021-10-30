import { useEffect, useState } from "react";

import * as S from "./style";

import { getPlantingGlass } from "../../../libs/planting-glass";

import { Glass } from "../../../types/components-type/planting-glass";

function colorGenerator(avg: number, value: number): string {
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
}

const plantingGlassTo2dArray = (plantingGlass: Glass[]) => {
  const array = [...plantingGlass];
  const newArr = [];
  while (array.length) newArr.push(array.splice(0, 7));

  return newArr;
};

const plantingGlassCountAvg = (plantingGlass: Glass[]) => {
  let avg = 0;
  plantingGlass.forEach((value) => {
    avg += value.count;
  });

  avg = avg / plantingGlass.length;

  return avg;
};

export default function PlantingGlass(): JSX.Element {
  const [plantingItems, setPlantingItems] = useState<Glass[]>([]);

  const array = plantingGlassTo2dArray(plantingItems);
  const avg = plantingGlassCountAvg(plantingItems);

  useEffect(() => {
    (async () => {
      const res = await getPlantingGlass();
      setPlantingItems(res);
    })();
    return () => setPlantingItems([]);
  }, []);

  return (
    <>
      <S.TitleBox>
        <S.Title>수행 현황</S.Title>
      </S.TitleBox>
      <S.Card>
        {array.map((e: Glass[], i: number) => (
          <div key={"i_" + i}>
            <S.WeekGrid key={"g_" + i}>
              {e.map((item: Glass, j: number) => (
                <S.DayItem key={i + "-" + j} color={colorGenerator(avg, item.count)} id={item.date} />
              ))}
            </S.WeekGrid>
          </div>
        ))}
      </S.Card>
    </>
  );
}
