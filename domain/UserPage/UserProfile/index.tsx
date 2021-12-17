import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import UserPageAvatar from "../UserPageAvatar";
import Button from "../../../components/Button";
import { isPermissionState, queryStringUserState } from "../../../states/app";
import { getCourses } from "../../../libs/course";
import { useRouter } from "next/router";

export const imageDefault =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAAMFBMVEWhtunL1vLM1/KftOm1xe3M1vKit+m/ze+kuOrH0/Gqveuyw+3D0PC6ye6uwOyftOY8UPyPAAADcklEQVR4nO3c3XKrIBSGYRGN4l/v/2632k6mSdPAslmB5X6fo0wPWr5ZCEKgVQUAAAAAAAAAAAAAAAAAAAAAAAAAkPO+6odhWYbhsn48H18t8+RcvXOhG/uTpfTDvKZr3dWacxqr86T0w7RW7t76oyZ3y17E992DgJ8p3XKGQvrF/RJwD9nlbt/f+flJwC1j6HM38Y989zzh1lkH053VT7GEW0jLGeM1/DTkbuhhvklL2IZL7qYeNaQl3MZVq101MeCWcTSZMTZd3Mrd2kN6ScJ6NlhGWRFda3DEuYgSuroxV8bUCeMq5G6xmJ/aeKybMpqb/3thQoMDziLsp66djEUUjqc7Y2Nq0hLjlrWH0QdxEesld6OFDkQcc7dZ5iJOaG7y788f8UgVjXXU/+BZ9EH6dmNuRE3dmPoe0diGqnih4ewt/JO3pq5FtPaOKh9Src0ZBx5Ga49iJV5N2eunaxmFRTQ2K26EY6q9rZuNrIj2+ulaxjG9jG2wmFC08re24r9KXlGpzokfH3q/u/KJE4fuhKEaMfFxrHVHU92ISTOHekLdiAl1rCfd/VP1iJGTRds+v3IDtDvqyl+ezB2105/y9SM+KWTdzpc3TPlviLhqwo+Tfm1dd5bPFN3z1dJtZ22/9qy2j6E526HbNeXQdPu5YhemeelPeXa68l+x/DnjAXjuPfNiTu94u8mMiCegv5j65B97x5/WjrhfdlvGsfnFuCyD9suOYkTvh7ELddz2yqp4Q0wr4vrS3bn65rLbk5X/fg9ObeGhEtH3888FYiymM7R8XAO28q/Bt5STlYtws7CA30MGA5WM7bhFQ87Fn9mUH0a5D1n2TTjfh78mdGUfbPBL2iQRzVjs1VTJd6aRjFPuLI8dOTD1a8Yir/u9roZ7xgLrmPp1aXrG4sYc8Zm3aMbirm3Kz59GM5Z1TuXA8dOEjCWdinvtUHONWNTjqBDQFdVVj1yQSlPM7Ci6NSxRzIU/lbHmK2MhZVQrYjFl1HsSN0WUUXh8WKaMw8Yvfjm9i1jC3Kg42OwZS3jF0QxYRk99+RLjLmL+Bccr1/qP5Y8ov/otU8CxcfldTGHE7NcaD1waFkbMvquqPNqUMN6oTvx7xOyTv3rE/P9eRGVL47s6+12j0QVtuSMCAAAAAAAAAAAAAAAAAAAAAAAAAACpf/P2JHtXd325AAAAAElFTkSuQmCC";

export default function UserProfile(): JSX.Element {
  const queryStringUser = useRecoilValue(queryStringUserState);
  const isPermission = useRecoilValue(isPermissionState);

  const [isThereCourses, setIsThereCourses] = useState<boolean>();

  const router = useRouter();

  function handleNewTodo() {
    router.push("/new-todo");
  }

  function handleNewCourses() {
    router.push("/new-course");
  }

  useEffect(() => {
    (async () => {
      const res = await getCourses(queryStringUser.id);
      setIsThereCourses(!!res.length);
    })();
  }, [queryStringUser]);

  return (
    <S.ProfileBox>
      <S.AvatarRoundBox>
        <UserPageAvatar src={queryStringUser.avatarImage ? queryStringUser.avatarImage : imageDefault} />
      </S.AvatarRoundBox>
      <S.Card>
        <S.UserName>{queryStringUser.name}</S.UserName>
        <S.Introduction>{queryStringUser.email}</S.Introduction>
      </S.Card>
      {isPermission &&
        (isThereCourses ? (
          <S.ButtonBox onClick={handleNewTodo}>
            <Button text={"새로운 할 일 추가"} />
          </S.ButtonBox>
        ) : (
          <S.ButtonBox onClick={handleNewCourses}>
            <Button text={"할 일 추가를 위해 코스 생성하기"} />
          </S.ButtonBox>
        ))}
    </S.ProfileBox>
  );
}
