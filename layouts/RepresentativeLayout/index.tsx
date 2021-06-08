import { ReactNode } from "react";
import Head from "next/head";

import { default as S } from "./style";

import NavigationBar from "../../components/NavigationBar";

type Props = {
  children?: ReactNode;
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
      {children}
      {pageType != "Add" ? <NavigationBar pageType={pageType} /> : null}
    </>
  );
}

export default RepresentativeLayout;
