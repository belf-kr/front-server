export type Tag = {
  id?: string;
  value: string;
};

export type CourseItem = {
  id?: number;
  title?: string;
  explanation?: string;
  tags?: Tag[];
  color?: string;
  creatorId?: string;
  startDate?: string;
  endDate?: string;
  likeCount?: number;
  originalCourseId?: number;
};
