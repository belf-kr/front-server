import React, { useEffect, useState } from "react";

import getAllLikeCount from "../../libs/axios/getAllLikeCount";

import Component from "./Component";
import Loading from "./Loading";

function AllLikeCount(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<Loading />);

  useEffect(() => {
    getAllLikeCount()
      .then((res) => {
        setComponent(<Component count={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default AllLikeCount;
