import UserProfile from "../../libs/type/UserProfile";
import { default as S } from "./style";

type props = {
  userProfile: UserProfile;
};

function Component({ userProfile }: props): JSX.Element {
  return (
    <S.Frame>
      <S.ProfileImg src={userProfile.avatar_url}></S.ProfileImg>
      <S.IdAndIntro>
        <S.UserIdText>{userProfile.nickname}</S.UserIdText>
        <S.IdAndIntro>{userProfile.introduction}</S.IdAndIntro>
      </S.IdAndIntro>
    </S.Frame>
  );
}
export default Component;
