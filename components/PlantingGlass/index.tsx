import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { plantingGlassState } from "../../states/plantingGlass";
import Component from "./Component";

function PlantingGlass(): JSX.Element {
  const con = useRecoilValueLoadable(plantingGlassState);
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
