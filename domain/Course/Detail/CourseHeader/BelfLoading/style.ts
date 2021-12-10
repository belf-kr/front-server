import styled, { keyframes } from "styled-components";

const FadeBox = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #00000085;
  z-index: 1001;
  filter: alpha(opacity=60);
`;

const AnimationBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const ContainerBox = styled.div``;

const right = keyframes`
	0% {
		transform: translate(-15px);
	}
	50% {
		transform: translate(15px);
	}
	100% {
		transform: translate(-15px);
	}
`;

const left = keyframes`
	0% {
		transform: translate(15px);
	}
	50% {
		transform: translate(-15px);
	}
	100% {
		transform: translate(15px);
	}
`;
const SpinBall = styled.div`
  width: 10px;
  height: 10px;
  margin: 10px auto;
  border-radius: 50px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.brandColor.main};
  :nth-child(1) {
    animation: ${right} 1s infinite ease-in-out;
  }
  :nth-child(2) {
    animation: ${left} 1.1s infinite ease-in-out;
  }
  :nth-child(3) {
    animation: ${right} 1.05s infinite ease-in-out;
  }
  :nth-child(4) {
    animation: ${left} 1.15s infinite ease-in-out;
  }

  :nth-child(5) {
    animation: ${right} 1.1s infinite ease-in-out;
  }

  :nth-child(6) {
    animation: ${left} 1.05s infinite ease-in-out;
  }

  :nth-child(7) {
    animation: ${right} 1s infinite ease-in-out;
  }
`;

const Floating = keyframes`
	0% {
		transform: translateY(5px) rotate(5deg);
	}
  25% {
    transform: translateY(-5px) rotate(-5deg);
  }
	75% {
		transform: translateY(5px) rotate(-10deg);
	}
  100% {
		transform: translateY(5px) rotate(5deg);
	}
`;

const BelfIconBox = styled.div`
  animation: ${Floating} 2s infinite ease-in-out;
  path {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
  }
`;

export { AnimationBox, BelfIconBox, ContainerBox, FadeBox, SpinBall };
