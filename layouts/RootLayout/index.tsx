import React, { ReactNode } from "react";

import Head from "next/head";

import * as S from "./style";

import Header from "../../domain/Header";

type props = {
  children?: ReactNode;
};

export default function RootLayout({ children }: props): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,  maximum-scale=1, width=device-width" />
      </Head>
      <S.HeaderBox>
        <Header />
      </S.HeaderBox>
      <S.MainBox>
        <main>{children}</main>
      </S.MainBox>
    </>
  );
}
