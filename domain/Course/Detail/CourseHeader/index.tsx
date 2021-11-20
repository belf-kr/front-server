import React from "react";

import * as S from "./style";

import FollowButton from "../../../FollowButton";

export default function CourseHeader(): JSX.Element {
  return (
    <S.Box>
      <S.Card>
        <S.Section>
          <S.UserInfoBox>
            <S.UserImageBox>
              <img src="https://avatars.githubusercontent.com/u/51093294?v=4" />
            </S.UserImageBox>
            <S.UserNameText>JP3Pe</S.UserNameText>
          </S.UserInfoBox>
          <S.Line />
          <S.CourseTitleText>테스트 입니다.</S.CourseTitleText>
        </S.Section>
        <S.FollowButtonBox>
          <FollowButton type="belf" count={10} />
          <FollowButton type="Heart" count={100} />
        </S.FollowButtonBox>
      </S.Card>
    </S.Box>
  );
}
