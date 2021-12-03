import React from "react";

import * as S from "./style";

import ArrowIcon from "../../../../../icons/ArrowIcon";
import CheckIcon from "../../../../../icons/CheckIcon";
import { DoneItem as DoneItemType } from "../../../../../types/components-type/todo";
import Link from "next/link";

type props = {
  doneItem: DoneItemType;
  uri: string;
};

export default function DoneItem({ doneItem, uri }: props): JSX.Element {
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
          <S.ArrowBox>
            <ArrowIcon />
          </S.ArrowBox>
        </S.InfoBox>
      </S.TodoItemBox>
    </Link>
  );
}
