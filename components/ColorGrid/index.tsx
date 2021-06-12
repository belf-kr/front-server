import { useEffect, useState } from "react";

import getColors from "../../libs/axios/getColors";

import Component from "./Component";

function ColorGrid(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<>Loading...</>);

  useEffect(() => {
    getColors()
      .then((res) => {
        setComponent(<Component colors={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default ColorGrid;
