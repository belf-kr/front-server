import styled from "styled-components";

const Box = styled.div`
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 300 / 300;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 850px) {
    max-width: 160px;
    aspect-ratio: auto 160 / 160;
  }
`;

export { Box };
