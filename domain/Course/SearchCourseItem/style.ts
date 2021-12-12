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
  position: relative;
  width: 100%;
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
  text-align: left;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Explanation = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${({ theme }) => theme.fontColor.sub};
  width: calc(100% - 40px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;

const RowBox = styled.div`
  height: 24px;
  line-height: 24px;
  margin: 1px 0px;
  * {
    float: left;
  }
  overflow: hidden;
`;

export { Card, Color, Explanation, RowBox, Title, InfoBox };
