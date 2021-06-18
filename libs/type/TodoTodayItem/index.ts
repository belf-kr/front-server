export type TodoItem = {
  id?: number;
  recurringCycleDate?: string;
  title?: string;
  explanation?: string;
  passedDay?: number;
  addDate?: string;
  courseId?: CourseItem;
};

type Tag = {
  id?: string;
  value: string;
};
type Color = {
  id?: string;
};

type CourseItem = {
  id?: number;
  title?: string;
  explanation?: string;
  tags?: Tag[];
  color?: Color;
  creatorId?: string;
  startDate?: string;
  endDate?: string;
  likeCount?: number;
  originalCourseId?: number;
};
