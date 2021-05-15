import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { plantingGlassState } from "../../states/plantingGlass";
import Component from "./Component";

function PlantingGlass(): JSX.Element {
  const user = useRecoilValueLoadable(plantingGlassState);
  switch (user.state) {
    case "hasValue":
      return (
        <>
          <Component />
        </>
      );
    case "loading":
      return <>loading...</>;
    case "hasError":
      return <>error...</>;
  }
}

export default PlantingGlass;
