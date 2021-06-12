import { useState } from "react";

import { default as S } from "./style";

type props = {
  colors: string[];
};

function Component({ colors }: props): JSX.Element {
  const [colorsObject, setColorsObject] = useState(
    colors.map((element, index) => {
      return { id: index, color: element, isChecked: index === 0 ? true : false };
    })
  );

  function colorClick(i) {
    setColorsObject(
      colorsObject.map((value, index) => {
        if (index === i) {
          value.isChecked = true;
        } else {
          value.isChecked = false;
        }
        return value;
      })
    );
  }

  return (
    <S.Grid>
      {colorsObject.map((item, index) => (
        <S.Item key={index} color={item.color} onClick={() => colorClick(index)}>
          <S.ItemBorder isChecked={item.isChecked} />
        </S.Item>
      ))}
    </S.Grid>
  );
}
export default Component;
