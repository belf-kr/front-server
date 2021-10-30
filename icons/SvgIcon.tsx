import { ReactNode } from "react";
import styled from "styled-components";

import { Fill, IconFill, IconSize, Size } from "./type";

type props = {
  children: ReactNode;
  size: Size;
  fill: Fill;
};

const IconStyle = styled.div<props>`
  svg {
    width: ${(props) => IconSize[props.size]}px;
    height: ${(props) => IconSize[props.size]}px;
    fill: ${(props) => IconFill(props.fill)};
  }
  display: inline-block;
`;

export default function SvgIcon({ children, size, fill }: props): JSX.Element {
  return (
    <>
      <IconStyle size={size} fill={fill}>
        {children}
      </IconStyle>
    </>
  );
}
