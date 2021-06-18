import React, { useEffect, useState } from "react";

import getCourseList from "../../libs/axios/getCourseList";

import Component from "./Component";

import Loading from "./Loading";

function CourseList(): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<Loading />);

  useEffect(() => {
    getCourseList()
      .then((res) => {
        setComponent(<Component courseList={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default CourseList;
