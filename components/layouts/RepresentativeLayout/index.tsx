import Head from "next/head";
import React, { ReactNode } from "react";
import { default as S } from "../../../styles/RepresentativeLayout";
import NotificationButton from "../../NotificationButton";
import PageTitle from "../../PageTitle";

type Props = {
  children?: ReactNode;
  MainTitle?: () => JSX.Element;
  title?: string;
  pageType?: string;
};

function RepresentativeLayout({ children, title = "page", pageType = "" }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.HeaderBackground pageType={pageType} />
      <S.Header>
        <PageTitle titleText={title}/>
        <NotificationButton/>
      </S.Header>
      {children}
    </>
  );
}

export default RepresentativeLayout;
