import React from "react";
import Link from "next/link";

import { useRecoilState, useRecoilValue } from "recoil";
import { themeState, QueryStringUserState } from "../../../states/app";

import * as S from "./style";

import ChildrenImg from "../../../icons/svg/Children.svg";
import FieldImg from "../../../icons/svg/Field.svg";
import Button from "../../../components/Button";

const posList = [
  { x: 2, y: 4 },
  { x: 4, y: 34 },
  { x: 8, y: 90 },
  { x: 10, y: 14 },
  { x: 20, y: 54 },
  { x: 27, y: 82 },
  { x: 40, y: 23 },
  { x: 50, y: 92 },
  { x: 50, y: 50 },
  { x: 60, y: 4 },
  { x: 64, y: 79 },
  { x: 70, y: 8 },
  { x: 80, y: 30 },
  { x: 85, y: 90 },
  { x: 88, y: 55 },
  { x: 90, y: 21 },
  { x: 95, y: 72 },
];

const belfPosList = [
  { x: 18, y: 20 },
  { x: 28, y: 60 },
  { x: 82, y: 40 },
  { x: 62, y: 80 },
];
const getStarColor = (type?: "belf" | "normal" | "lightNormal") => {
  switch (type) {
    case "belf":
      return "#FF924A";
    case "lightNormal":
      return "#6bbaff";
    case "normal":
    default:
      return "#ffffff";
  }
};

export default function MainIntro(): JSX.Element {
  const ShootingStarList: JSX.Element[] = [];
  const BelfShootingStarList: JSX.Element[] = [];

  const [theme] = useRecoilState(themeState);

  const queryStringUser = useRecoilValue(QueryStringUserState);

  for (let i = 0; i < posList.length; i++) {
    ShootingStarList.push(
      <S.ShootingStar key={i} color={getStarColor(theme === "dark" ? "normal" : "lightNormal")} minSize={4} maxSize={14} x={posList[i].x} y={posList[i].y} />
    );
  }

  for (let i = 0; i < belfPosList.length; i++) {
    BelfShootingStarList.push(<S.ShootingStar key={i} color={getStarColor("belf")} minSize={40} maxSize={60} x={belfPosList[i].x} y={belfPosList[i].y} />);
  }

  return (
    <S.Box>
      <S.CommentBox>
        <S.MainCommentText>
          당신의 <br />
          꿈을 위한 가이드
        </S.MainCommentText>
        <S.SubCommentText>
          자신만의 코스를 만들고 공유해보세요. <br />
          다른 사용자의 코스를 가져올 수도 있습니다.
        </S.SubCommentText>
        <S.BelfShootingStarBox>
          <div>{BelfShootingStarList.map((item) => item)}</div>
        </S.BelfShootingStarBox>
        {queryStringUser === undefined ? (
          <S.ButtonsBox>
            <Link href="/register" passHref={true}>
              <S.ButtonBox>
                <Button text={"회원가입"} />
              </S.ButtonBox>
            </Link>
            <Link href="/login" passHref={true}>
              <S.ButtonBox>
                <Button text={"로그인"} />
              </S.ButtonBox>
            </Link>
          </S.ButtonsBox>
        ) : null}
      </S.CommentBox>
      {ShootingStarList.map((item) => item)}
      <S.ImageBox isDark={theme === "dark" ? true : false}>
        <div>
          <S.ChildrenImgBox>
            <ChildrenImg />
          </S.ChildrenImgBox>
          <S.FieldImgBox>
            <FieldImg />
          </S.FieldImgBox>
        </div>
      </S.ImageBox>
    </S.Box>
  );
}
