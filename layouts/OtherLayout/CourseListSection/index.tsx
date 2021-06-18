import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function CourseListSection({ children }: Props): JSX.Element {
  return <S.CourseListSection>{children}</S.CourseListSection>;
}

export default CourseListSection;
