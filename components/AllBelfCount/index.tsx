import React, { useEffect, useState } from "react";

import getAllBelfCount from "../../libs/axios/getAllBelfCount";

import Component from "./Component";
import Loading from "./Loading";

function AllBelfCount(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<Loading />);

  useEffect(() => {
    getAllBelfCount()
      .then((res) => {
        setComponent(<Component count={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default AllBelfCount;
