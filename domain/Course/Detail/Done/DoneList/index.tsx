import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getDones } from "../../../../../libs/work-done";
import { isRefreshQueryState } from "../../../../../states/app";
import { DoneItem as DoneItemType } from "../../../../../types/components-type/todo";
import DoneItem from "../DoneItem";

import * as S from "./style";

export default function DoneList(): JSX.Element {
  const isRefreshQuery = useRecoilValue(isRefreshQueryState);

  const [doneItems, setDoneItems] = useState<DoneItemType[]>([]);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getDones(parseInt(router.query?.courseId as string, 10));
      setDoneItems(res.reverse());
    })();
    return () => setDoneItems([]);
  }, [router, isRefreshQuery]);

  return (
    <>
      <S.TitleBox>
        <S.Title>한 일</S.Title>
      </S.TitleBox>
      <S.TodoBox>
        {doneItems.length === 0 ? (
          <a>한 일을 작성해주세요.</a>
        ) : (
          <>
            {doneItems.map((doneItem, i) => {
              const uri = `/${router.query?.userEmail}/${router.query?.courseId}/done/${doneItem.id}/post`;
              return <DoneItem key={i} doneItem={doneItem} uri={uri} />;
            })}
          </>
        )}
      </S.TodoBox>
    </>
  );
}
