import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function TodayLayout({ children }: Props): JSX.Element {
  return <>{children}</>;
}

export default TodayLayout;
