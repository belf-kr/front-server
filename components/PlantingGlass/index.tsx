import { useRecoilValueLoadable } from "recoil";

import { getPlantingGlassSelector } from "../../states/plantingGlass";

import Component from "./Component";

function PlantingGlass(): JSX.Element {
  const con = useRecoilValueLoadable(getPlantingGlassSelector);

  switch (con.state) {
    case "hasValue":
      return <Component />;
    case "loading":
      return <>loading...</>;
    case "hasError":
      return <>error...</>;
  }
}

export default PlantingGlass;
