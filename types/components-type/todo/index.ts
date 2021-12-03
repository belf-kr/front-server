import { EditNode } from "../editer";

export type TodoItem = {
  id?: number;
  recurringCycleDate?: number;
  title?: string;
  explanation?: string;
  passedDay?: number;
  addDate?: string;
  courseId?: number;
  courseTitle?: string;
  color?: string;
  repeatedDaysOfTheWeek?: number[];
};

export type DoneItem = {
  id?: number;
  title?: string;
  content?: EditNode[];
  workTodoId?: number;
  userId?: number;
  actionDate?: string;
};
