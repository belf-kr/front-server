import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyle";

import { version } from "../package.json";

import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import lightTheme from "../theme/lightTheme";

function App({ Component, pageProps }: AppProps): JSX.Element {
  console.log(`version: ${version}`);
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
