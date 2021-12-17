import React from "react";

import * as S from "./style";

import CheckIcon from "../../../../../icons/CheckIcon";
import { DoneItem as DoneItemType } from "../../../../../types/components-type/todo";
import Link from "next/link";
import Kebab from "../../../../../components/Kebab";
import router from "next/router";
import { MenuItemType } from "../../../../../types/components-type/kebab";
import { deleteDone } from "../../../../../libs/work-done";
import { useRecoilValue } from "recoil";
import { isPermissionState } from "../../../../../states/app";

type props = {
  doneItem: DoneItemType;
  uri: string;
};

export default function DoneItem({ doneItem, uri }: props): JSX.Element {
  const isPermission = useRecoilValue(isPermissionState);

  function handleClickMenuItem(item: DoneItemType) {
    (async () => {
      await deleteDone(item.id);
      router.reload();
    })();
  }

  function timestamp(actionDate: string) {
    const today = new Date(actionDate);
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  }

  const menuItems: MenuItemType[] = [
    {
      showText: "삭제",
      onClick: () => {
        handleClickMenuItem(doneItem);
      },
    },
  ];

  return (
    <Link href={uri}>
      <S.TodoItemBox>
        <S.CheckIconBox>
          <CheckIcon />
        </S.CheckIconBox>
        <S.InfoBox>
          <S.TextBox>
            <S.TodoText>{doneItem.title}</S.TodoText>
          </S.TextBox>
          <S.TextBox>
            <S.ExpranationText>{timestamp(doneItem.actionDate) ?? ""}</S.ExpranationText>
          </S.TextBox>
          <S.KebabBox>
            {isPermission && (
              <S.KebabBox>
                <Kebab menuItems={menuItems} />
              </S.KebabBox>
            )}
          </S.KebabBox>
        </S.InfoBox>
      </S.TodoItemBox>
    </Link>
  );
}
