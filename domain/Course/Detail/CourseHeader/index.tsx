import React, { useState } from "react";

import * as S from "./style";

import { CourseItem } from "../../../../types/components-type/course";

import { useRecoilValue } from "recoil";
import { queryStringUserState } from "../../../../states/app";
import Button from "../../../../components/Button";
import BelfIcon from "../../../../icons/BelfIcon";
// import { postBelfCourse } from "../../../../libs/course";
// import router from "next/router";
import { expiredTokenFallback } from "../../../../libs/oauth";
import BelfLoading from "./BelfLoading";
import { imageDefault } from "../../../UserPage/UserProfile";

type props = {
  courseItem: CourseItem;
};

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export default function CourseHeader({ courseItem }: props): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);

  const [isBelfFade, setBelfFade] = useState(false);

  const belfCourse = async () => {
    setBelfFade(true);

    await timeout(5000);

    try {
      // await postBelfCourse(courseItem.id);
      // router.back();
    } catch (error) {
      expiredTokenFallback(error);
    } finally {
      setBelfFade(false);
    }
  };

  return (
    <S.Box>
      <S.Card>
        <S.Section>
          <S.UserInfoBox>
            <S.UserImageBox>
              <img src={queryStringUser.avatarImage ? queryStringUser.avatarImage : imageDefault} />
            </S.UserImageBox>
            <S.UserNameText>{queryStringUser.email}</S.UserNameText>
          </S.UserInfoBox>
          <S.Line />
          <S.CourseTitleText>{courseItem.title}</S.CourseTitleText>
        </S.Section>
        <S.BelfButtonBox>
          <div onClick={belfCourse}>
            <Button Icon={<BelfIcon fill={"fontMain"} />} text={"코스 가져가기"} />
          </div>
        </S.BelfButtonBox>
      </S.Card>
      {isBelfFade ? <BelfLoading /> : null}
    </S.Box>
  );
}
