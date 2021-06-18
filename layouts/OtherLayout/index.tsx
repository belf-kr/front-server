import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function OtherLayout({ children }: Props): JSX.Element {
  return <>{children}</>;
}

export default OtherLayout;
