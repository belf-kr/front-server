import { atom, selector } from "recoil";
import getPlantingGlass from "../../utils/axios/getPlantingGlass";
import { Glass } from "../../utils/type/plantingGlass";

export const plantingGlassState = atom<Glass[]>({
  key: "plantingGlassState",
  default: selector({
    key: "plantingGlassState/default",
    get: async () => {
      return await getPlantingGlass();
    },
  }),
});

export const countAvg = selector({
  key: "countAvg",
  get: ({ get }) => {
    const json = get(plantingGlassState);
    let avg = 0;
    json.forEach((value) => {
      avg += value.count;
    });

    avg = avg / json.length;

    return avg;
  },
});

export const platingGlass2dArray = selector({
  key: "platingGlass2dArray",
  get: ({ get }) => {
    const json = [...get(plantingGlassState)];
    const array = [];
    while (json.length) array.push(json.splice(0, 7));

    return array;
  },
});
