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

export default function UserPageNavigate({ setTabKey }: props): JSX.Element {
  const router = useRouter();

  const [tabList, setTabList] = useState<TabInfoType[]>([
    {
      key: "",
      isSelect: true,
      showText: "",
      uri: "",
    },
    {
      key: "todayTodo",
      isSelect: false,
      showText: "오늘 할일",
      uri: "?tab=todayTodo",
    },
    {
      key: "courseList",
      isSelect: false,
      showText: "코스 리스트",
      uri: "?tab=courseList",
    },
    {
      key: "belfList",
      isSelect: false,
      showText: "Belf 리스트",
      uri: "?tab=belfList",
    },
  ]);

  useEffect(() => {
    const currentTabKey = String(router.query?.tab ?? "");
    const currentUserId = String(router.query?.userId ?? "");

    const tempList = [...tabList];
    tempList[0].showText = currentUserId;
    tempList[0].key = currentUserId;
    setTabList(tempList);

    clickedTab(currentTabKey);
    setTabKey(currentTabKey);
  }, [router]);

  const clickedTab = (tabKey: string) => {
    const tempList = [...tabList];
    tempList.forEach((item) => (item.isSelect = item.key === tabKey));
    tempList[0].isSelect = tabKey === "";
    setTabList(tempList);
  };

  return (
    <S.TabBox>
      <S.ScrollBox>
        <S.TabItemsBox>
          {tabList.map((tab: TabInfoType, index: number) => (
            <Link scroll={false} href={"/" + tabList[0].showText + tab.uri} key={"tab" + index} passHref={true}>
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
