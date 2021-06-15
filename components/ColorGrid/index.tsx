import { useEffect, useState } from "react";

import getColors from "../../libs/axios/getColors";

import Component from "./Component";

type props = {
  colorOnChange: (value: string) => void;
};

function ColorGrid({ colorOnChange }: props): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<>Loading...</>);

  useEffect(() => {
    getColors()
      .then((res) => {
        setComponent(<Component colors={res} colorOnChange={(v) => colorOnChange(v)} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default ColorGrid;
