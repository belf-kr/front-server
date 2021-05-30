import { CourseItem as CourseItemType } from "../../libs/type/CourseItem";

import CourseItem from "../CourseItem";

type props = {
  courseList: CourseItemType[];
};

function Component({ courseList }: props): JSX.Element {
  return (
    <>
      {courseList.map((courseItem: CourseItemType, index: number) => (
        <CourseItem key={"i_" + index} courseItem={courseItem} />
      ))}
    </>
  );
}
export default Component;
