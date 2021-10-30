import React from "react";

import Link from "next/link";

import * as S from "./style";

import UserPageAvatar from "../UserPageAvatar";
import FollowButton from "../../FollowButton";
import Button from "../../../components/Button";

export default function UserProfile(): JSX.Element {
  return (
    <S.ProfileBox>
      <S.AvatarRoundBox>
        <UserPageAvatar src="https://avatars.githubusercontent.com/u/51093294?v=4" />
      </S.AvatarRoundBox>
      <S.Card>
        <S.UserName>JP3Pe</S.UserName>
        <S.Introduction>Book Bug</S.Introduction>
        <S.FollowBox>
          <FollowButton type="belf" count={10} />
          <FollowButton type="Heart" count={100} />
        </S.FollowBox>
      </S.Card>
      <Link href="/new-todo" passHref={true}>
        <S.ButtonBox>
          <Button text={"새로운 할일 추가"} />
        </S.ButtonBox>
      </Link>
    </S.ProfileBox>
  );
}
