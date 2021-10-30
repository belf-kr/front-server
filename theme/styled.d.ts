import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: {
      main: string;
      sub: string;
      sub2: string;
    };

    brandColor: {
      main: string;
    };

    activateColor: {
      error: string;
    };

    backgroundColor: {
      bg: string;
      card: string;
    };

    lineColor: {
      main: string;
    };

    common: {
      fontSize: {
        s100: int;
        s200: int;
        s300: int;
        s400: int;
        s500: int;
        s600: int;
        s700: int;
        s800: int;
        s900: int;
        s1000: int;
      };
      fontWeight: {
        medium: string;
        bold: string;
      };
      borderRadius: {
        default: int;
      };
    };
  }
}
