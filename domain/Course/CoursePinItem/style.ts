import styled from "styled-components";

const Card = styled.button`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  height: 108px;
  padding: 16px;
  display: flex;
`;
const InfoBox = styled.div`
  padding-left: 6px;
  width: 100%;
  position: relative;
`;

const Color = styled.div<{ backgroundColor?: string }>`
  border-radius: 50%;
  width: 24px;
  max-width: 24px;
  min-width: 24px;
  height: 24px;
  background-color: ${(props) => props.backgroundColor};
  display: inline-block;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s400}px;
  color: ${({ theme }) => theme.fontColor.main};
`;

const Explanation = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${({ theme }) => theme.fontColor.sub};
`;

const RowBox = styled.div`
  height: 24px;
  line-height: 24px;
  margin: 1px 0px;
  * {
    float: left;
  }
`;

const ArrowBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

export { Card, Color, Explanation, RowBox, Title, ArrowBox, InfoBox };
