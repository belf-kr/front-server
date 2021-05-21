import Head from "next/head";
import { ReactNode } from "react";

import NotificationButton from "../../NotificationButton";
import PageTitle from "../../PageTitle";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
  MainTitle?(): JSX.Element;
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
      <S.HeaderSection>
        <PageTitle titleText={title} />
        <NotificationButton />
      </S.HeaderSection>
      <S.ContentsSection>{children}</S.ContentsSection>
    </>
  );
}

export default RepresentativeLayout;
