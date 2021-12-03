import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  position: relative;
`;

const shining = (minSize: number, maxSize: number) => keyframes`
  0% {
    width: ${minSize}px;
  }
  
  50% {
    width: ${maxSize}px;
  }
  
  100% {
    width: ${minSize}px;
  }
`;

const ShootingStar = styled.div<{ color: string; x: number; y: number; minSize: number; maxSize: number }>`
  position: absolute;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  background: ${(props) => `linear-gradient(-45deg, ${props.color}, rgba(0, 0, 255, 0))`};
  filter: drop-shadow(0 0 10px ${(props) => props.color});
  &:before {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: ${(props) => `linear-gradient(-45deg, rgba(0, 0, 255, 0), ${props.color}, rgba(0, 0, 255, 0))`};
    transform: translateX(50%);
    border-radius: 100%;
    animation: ${(props) => shining(props.minSize, props.maxSize)} 3000ms ease-in-out infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: ${(props) => `linear-gradient(-45deg, rgba(0, 0, 255, 0), ${props.color}, rgba(0, 0, 255, 0))`};
    border-radius: 100%;
    animation: ${(props) => shining(props.minSize, props.maxSize)} 3000ms ease-in-out infinite;
    transform: translateX(50%) rotateZ(-90deg);
  }
`;

const CommentBox = styled.div`
  margin: auto;
  padding: 100px 20px 0px 20px;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: relative;
  z-index: 30;
`;

const MainCommentText = styled.a`
  color: ${({ theme }) => theme.fontColor.main};
  font-size: ${({ theme }) => theme.common.fontSize.s1000}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
`;

const SubCommentText = styled.a`
  color: ${({ theme }) => theme.fontColor.sub};
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const ButtonBox = styled.div`
  button {
    width: 100px;
    padding: 8px 16px 4px;
    display: block;
  }
`;

const BelfShootingStarBox = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 100px;
  right: 0%;
  z-index: 50;

  @media only screen and (max-width: 850px) {
    top: 300px;
    width: 300px;
    height: 300px;
  }
  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const ImageBox = styled.div<{ isDark: boolean }>`
  position: absolute;
  width: 100%;
  left: 0%;
  bottom: 0;
  height: 40px;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${(props) => (props.isDark ? "black" : "#d7d7d7")};
  }
`;

const ChildrenImgBox = styled.div`
  position: absolute;
  width: 50px;
  left: 30%;
  bottom: 10px;
  @media only screen and (max-width: 850px) {
    left: 10%;
  }
`;

const FieldImgBox = styled.div`
  position: absolute;
  width: 100%;
  svg {
    height: 40px;
    width: 100%;
  }
`;

export {
  BelfShootingStarBox,
  Box,
  ButtonBox,
  ButtonsBox,
  ChildrenImgBox,
  CommentBox,
  FieldImgBox,
  ImageBox,
  MainCommentText,
  ShootingStar,
  SubCommentText,
  shining,
};