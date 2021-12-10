import React from "react";

import * as S from "./style";

import CheckIcon from "../../../../../icons/CheckIcon";
import { DoneItem as DoneItemType } from "../../../../../types/components-type/todo";
import Link from "next/link";
import Kebab from "../../../../../components/Kebab";
import router from "next/router";
import { MenuItemType } from "../../../../../types/components-type/kebab";
import { deleteDone } from "../../../../../libs/work-done";

type props = {
  doneItem: DoneItemType;
  uri: string;
};

export default function DoneItem({ doneItem, uri }: props): JSX.Element {
  function handleClickMenuItem(item: DoneItemType) {
    (async () => {
      await deleteDone(item.id);
      router.reload();
    })();
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
            <S.ExpranationText>{doneItem.actionDate ?? ""}</S.ExpranationText>
          </S.TextBox>
          <S.KebabBox>
            <Kebab menuItems={menuItems} />
          </S.KebabBox>
        </S.InfoBox>
      </S.TodoItemBox>
    </Link>
  );
}
