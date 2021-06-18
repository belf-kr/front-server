import { useEffect, useState } from "react";

import getCourseList from "../../libs/axios/getCourseList";

import Component from "./Component";

type props = {
  courseOnChange: (value: number) => void;
};

function CourseSelection({ courseOnChange }: props): JSX.Element {
  const [component, setComponent] = useState<JSX.Element>(<>Loading...</>);

  useEffect(() => {
    getCourseList()
      .then((res) => {
        setComponent(<Component courseOnChange={courseOnChange} courseList={res} />);
      })
      .catch(() => {
        setComponent(<>Error...</>);
      });
  }, []);

  return component;
}

export default CourseSelection;
