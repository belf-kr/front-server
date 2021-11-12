import React from "react";

import type { AppProps } from "next/app";

import { version } from "../package.json";

import { RecoilRoot } from "recoil";

import ThemeRoot from "../theme/ThemeRoot";
import RootLayout from "../layouts/RootLayout";
import AppInit from "../components/AppInit";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log(`version: ${version}`);
  return (
    <RecoilRoot>
      <ThemeRoot>
        <RootLayout>
          <AppInit>
            <Component {...pageProps} />
          </AppInit>
        </RootLayout>
      </ThemeRoot>
    </RecoilRoot>
  );
}
