import styled from "styled-components";

const Card = styled.button`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  height: 132px;
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

const RowText = styled.a`
  text-align: left;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`;

const Title = styled(RowText)`
  font-size: ${({ theme }) => theme.common.fontSize.s400}px;
  color: ${({ theme }) => theme.fontColor.main};
`;

const Explanation = styled(RowText)`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${({ theme }) => theme.fontColor.sub};
`;

const UserId = styled(RowText)`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  color: ${({ theme }) => theme.fontColor.sub2};
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

export { Card, Color, Explanation, RowBox, Title, InfoBox, UserId };
