import React, { useState } from "react";

import * as S from "./style";

import { CourseItem } from "../../../../types/components-type/course";

import { useRecoilValue } from "recoil";
import { loginUserState, queryStringUserState } from "../../../../states/app";
import Button from "../../../../components/Button";
import BelfIcon from "../../../../icons/BelfIcon";
import { postBelfCourse } from "../../../../libs/course";
import { useRouter } from "next/router";
import { expiredTokenFallback } from "../../../../libs/oauth";
import BelfLoading from "./BelfLoading";
import { imageDefault } from "../../../UserPage/UserProfile";

type props = {
  courseItem: CourseItem;
};

export default function CourseHeader({ courseItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const loginUser = useRecoilValue(loginUserState);

  const [isBelfFade, setBelfFade] = useState(false);

  const router = useRouter();

  const belfCourse = async () => {
    setBelfFade(true);

    try {
      await postBelfCourse(courseItem.id);
      router.push(`/${loginUser.email}?tab=belfList`);
    } catch (error) {
      expiredTokenFallback(error);
    } finally {
      setBelfFade(false);
    }
  };

  function handleUserPage() {
    router.push(`/${queryStringUser.email}`);
  }

  return (
    <S.Box>
      <S.Card>
        <S.Section>
          <S.UserInfoBox>
            <S.UserImageBox>
              <img src={queryStringUser.avatarImage ? queryStringUser.avatarImage : imageDefault} />
            </S.UserImageBox>
            <S.UserNameText onClick={handleUserPage}>{queryStringUser.email}</S.UserNameText>
          </S.UserInfoBox>
          <S.Line />
          <S.CourseTitleText>{courseItem.title}</S.CourseTitleText>
        </S.Section>
        {/* 로그인 되지 않는 사용자 및 자기 자신의 코스는 belf 할 수 없음 */}
        {loginUser && queryStringUser.id !== loginUser.id && (
          <S.BelfButtonBox>
            <div onClick={belfCourse}>
              <Button Icon={<BelfIcon fill={"fontMain"} />} text={"코스 가져가기"} />
            </div>
          </S.BelfButtonBox>
        )}
      </S.Card>
      {isBelfFade ? <BelfLoading /> : null}
    </S.Box>
  );
}
