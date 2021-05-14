import Head from "next/head";
import React, { ReactNode } from "react";
import { default as S } from "../../../styles/RepresentativeLayout";

type Props = {
  children?: ReactNode;
  MainTitle?: () => JSX.Element;
  title?: string;
  pageType?: string;
};

function RepresentativeLayout({ children, MainTitle, title = "page", pageType = "" }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.HeaderBackGround pageType={pageType}/>
      <S.Header>
        <MainTitle />
      </S.Header>
      {children}
    </>
  );
}

export default RepresentativeLayout;
