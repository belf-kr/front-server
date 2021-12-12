import styled from "styled-components";

type LoaderType = {
  width: string;
  height: string;
};

const Loader = styled.div<LoaderType>`
  text-align: center;
  display: inline-block;
  vertical-align: top;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  svg path,
  svg rect {
    fill: ${({ theme }) => theme.brandColor.main};
  }
`;

export { Loader };
