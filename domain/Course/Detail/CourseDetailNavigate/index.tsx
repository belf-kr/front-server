import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./style";

type TabInfoType = {
  key: string;
  showText: string;
  isSelect: boolean;
  uri: string;
};

type props = {
  setTabKey: (key: string) => void;
};

export default function CourseDetailNavigate({ setTabKey }: props): JSX.Element {
  const router = useRouter();

  const [tabList, setTabList] = useState<TabInfoType[]>([
    {
      key: "todo",
      isSelect: true,
      showText: "할 일",
      uri: "?tab=todo",
    },
    {
      key: "doneTodoList",
      isSelect: false,
      showText: "한 일",
      uri: "?tab=doneTodoList",
    },
    // {
    //   key: "repeatList",
    //   isSelect: false,
    //   showText: "반복 할 일",
    //   uri: "?tab=repeatList",
    // },
  ]);

  useEffect(() => {
    const currentTabKey = String(router.query?.tab ?? "todo");
    clickedTab(currentTabKey);
    setTabKey(currentTabKey);
  }, [router]);

  const clickedTab = (tabKey: string) => {
    const tempList = [...tabList];
    tempList.forEach((item) => (item.isSelect = item.key === tabKey));
    tempList[0].isSelect = tabKey === "todo";
    setTabList(tempList);
  };

  return (
    <S.TabBox>
      <S.ScrollBox>
        <S.TabItemsBox>
          {tabList.map((tab: TabInfoType, index: number) => (
            <Link scroll={false} href={`/${router.query?.userEmail}/${router.query?.courseId ?? "0"}${tab.uri}`} key={"tab" + index} passHref={true}>
              <S.TabItemBox isSelect={tab.isSelect} onClick={() => clickedTab(tab.key)}>
                <S.Text>{tab.showText}</S.Text>
              </S.TabItemBox>
            </Link>
          ))}
        </S.TabItemsBox>
      </S.ScrollBox>
      <S.BlurBox />
    </S.TabBox>
  );
}
