import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  20% {
    opacity: 0.25;
  }

  50% {
    opacity: 1;
  }

  80% {
    opacity: 0.5;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;

const Indicator = styled.div`
  width: 0;
  height: 100%;
  box-shadow: 0 0 75px 75px rgba(255, 255, 255, 0.5);
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation-name: ${skeletonAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
`;

const style = {
  Container,
  Skeleton,
  Indicator,
};

export default style;
