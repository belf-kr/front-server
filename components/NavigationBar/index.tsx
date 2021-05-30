import { useEffect, useState } from "react";
import Link from "next/link";

import { default as S } from "./style";

import addCross from "../../assets/icons/addCross";
import home from "../../assets/icons/home";
import course from "../../assets/icons/course";
import board from "../../assets/icons/board";
import user from "../../assets/icons/user";

import { Icon } from "../../libs/type/Icon";

type props = {
  pageType: string;
};

type menuType = {
  icon: Icon;
  isActive: boolean;
  pageType: string;
  uri?: string;
};

const boolToColor = (isActive: boolean): string => {
  if (isActive) {
    return "#FF924A";
  } else {
    return "#D6D6D6";
  }
};

function NavigationBar({ pageType }: props): JSX.Element {
  const [menuList, setMenuList] = useState<menuType[]>([
    {
      icon: home,
      isActive: true,
      pageType: "Today",
      uri: "/",
    },
    {
      icon: course,
      isActive: false,
      pageType: "Course",
      uri: "/course-list",
    },
    {
      icon: board,
      isActive: false,
      pageType: "Board",
    },
    {
      icon: user,
      isActive: false,
      pageType: "User",
    },
  ]);

  useEffect(() => {
    const index = menuList.findIndex((i) => i.pageType == pageType);
    const newArr = menuList.map((e: menuType, i: number): menuType => ({ ...e, isActive: i == index }));
    setMenuList(newArr);
  }, []);

  return (
    <S.Frame>
      <S.Card>
        <S.MenuSection>
          <S.MenuIconSection>
            {menuList.map((menu: menuType, index: number) => (
              <Link href={menu.uri == undefined ? "" : menu.uri} key={"i_" + index}>
                <S.MenuIconArea>
                  <S.Icon {...menu.icon} fill={boolToColor(menu.isActive)}>
                    <path d={menu.icon.d} />
                  </S.Icon>
                </S.MenuIconArea>
              </Link>
            ))}
          </S.MenuIconSection>
        </S.MenuSection>
        <S.ButtonSection>
          <S.AddButton>
            <S.Icon {...addCross}>
              <path d={addCross.d} />
            </S.Icon>
          </S.AddButton>
        </S.ButtonSection>
      </S.Card>
    </S.Frame>
  );
}

export default NavigationBar;
