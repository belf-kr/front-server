import React, { useEffect, useState } from "react";

import getPlantingGlass from "../../libs/axios/getPlantingGlass";

import Component from "./Component";
import Loading from "./Loading";

function PlantingGlass(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<Loading />);
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
