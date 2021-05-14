import Head from "next/head";
import React, { ReactNode } from "react";
import { default as S } from "../../../styles/RepresentativeLayout";

type Props = {
  children?: ReactNode;
  MainTitle?: () => JSX.Element;
  title?: string;
};

function RepresentativeLayout({ children, MainTitle, title = "page" }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Header>
        <MainTitle />
      </S.Header>
      {children}
    </>
  );
}

export default RepresentativeLayout;
