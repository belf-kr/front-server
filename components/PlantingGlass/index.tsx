import { useEffect, useState } from "react";

import getPlantingGlass from "../../libs/axios/getPlantingGlass";

import Component from "./Component";

function PlantingGlass(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<>Loading...</>);

  useEffect(() => {
    getPlantingGlass()
      .then((res) => {
        setComponent(<Component plantingGlass={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default PlantingGlass;
