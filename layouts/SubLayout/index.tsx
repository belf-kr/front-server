import { ReactNode } from "react";
import Head from "next/head";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
  title?: string;
};

function SubLayout({ children, title = "page" }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />
      </Head>
      <S.HeaderBackground />
      {children}
    </>
  );
}

export default SubLayout;
