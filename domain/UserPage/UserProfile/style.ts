import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
  margin-top: 40px;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s800}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
  margin-top: 10px;
`;

const Introduction = styled.p`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.sub};
  margin-top: 16px;
`;

const AvatarRoundBox = styled.div``;

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  @media only screen and (max-width: 850px) {
    width: auto;
    ${Card} {
      margin-top: 20px;
    }
    ${AvatarRoundBox} {
      width: 160px;
      margin: auto;
    }
  }
`;

const FollowBox = styled.div`
  height: 36px;
  margin-top: 20px;
  > button {
    margin-right: 10px;
  }
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;

export { AvatarRoundBox, Card, FollowBox, Introduction, ProfileBox, UserName, ButtonBox };
