import { selector } from "recoil";

import getPlantingGlass from "../../libs/axios/getPlantingGlass";

export const getPlantingGlassSelector = selector({
  key: "getPlantingGlassSelector",
  get: async () => {
    return await getPlantingGlass();
  },
});

export const getCountAvgSelector = selector({
  key: "getCountAvgSelector",
  get: ({ get }) => {
    const json = get(getPlantingGlassSelector);
    let avg = 0;
    json.forEach((value) => {
      avg += value.count;
    });

    avg = avg / json.length;

    return avg;
  },
});

export const getPlatingGlass2dArraySelector = selector({
  key: "getPlatingGlass2dArraySelector",
  get: ({ get }) => {
    const json = [...get(getPlantingGlassSelector)];
    const array = [];
    while (json.length) array.push(json.splice(0, 7));

    return array;
  },
});
