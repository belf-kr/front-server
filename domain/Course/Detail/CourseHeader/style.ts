import styled from "styled-components";

const Box = styled.div`
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 6px 10px;
  column-gap: 10px;

  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    row-gap: 6px;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  margin: 6px 0px;
`;

const UserImageBox = styled.div`
  width: 24px;
  height: 24px;
  aspect-ratio: 24 / 24;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserNameText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  line-height: 24px;
  color: #ff924a;
  cursor: pointer;
  text-decoration: underline;
`;

const Line = styled.div`
  width: 1px;
  margin: 6px 0px;
  background-color: ${({ theme }) => theme.fontColor.sub2};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
`;

const CourseTitleText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  line-height: 36px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const BelfButtonBox = styled.div`
  margin: 2px 0px;
  margin-left: auto;
  > div > button {
    padding: 6px 16px 4px 12px;
  }
  @media only screen and (max-width: 850px) {
    margin: auto 0;
  }
`;

export { Box, Card, CourseTitleText, BelfButtonBox, Line, Section, UserImageBox, UserInfoBox, UserNameText };
