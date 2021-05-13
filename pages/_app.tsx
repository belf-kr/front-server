import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
