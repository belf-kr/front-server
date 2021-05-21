import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
