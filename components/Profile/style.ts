import styled from "styled-components";

const Frame = styled.div`
  display: grid;
  grid-template-columns: 65px auto 35px;
  column-gap: 10px;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 100%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;

const IdAndIntro = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  color: white;
  font-size: 16px;
  margin: auto 0px;
  height: 38px;
`;

const UserIdText = styled.a`
  font-weight: bold;
`;
const IntroText = styled.a``;

const style = {
  Frame,
  ProfileImg,
  IdAndIntro,
  UserIdText,
  IntroText,
};

export default style;
