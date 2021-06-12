import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function MyPageLayout({ children }: Props): JSX.Element {
  return <>{children}</>;
}

export default MyPageLayout;
