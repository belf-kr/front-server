import { default as S } from "./style";

import { Glass } from "../../libs/type/PlantingGlass";

type props = {
  plantingGlass: Glass[];
};

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

function Component({ plantingGlass }: props): JSX.Element {
  const array = plantingGlassTo2dArray(plantingGlass);
  const avg = plantingGlassCountAvg(plantingGlass);

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
