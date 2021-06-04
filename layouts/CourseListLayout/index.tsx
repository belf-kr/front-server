import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function CourseListLayout({ children }: Props): JSX.Element {
  return <>{children}</>;
}

export default CourseListLayout;
