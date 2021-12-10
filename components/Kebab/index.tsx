import * as S from "./style";

import { useEffect, useRef, useState } from "react";

import KebabIcon from "../../icons/KebabIcon";

import { MenuItemType } from "../../types/components-type/kebab";

type props = {
  menuItems?: MenuItemType[];
};

export default function Kebab({ menuItems }: props): JSX.Element {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const modalEl = useRef<HTMLDivElement>(null);

  function handleClickOutside({ target }: any) {
    if (modalEl.current) {
      if (!modalEl.current?.contains(target)) {
        setIsOpenPopup(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <S.Box
      ref={modalEl}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenPopup(!isOpenPopup);
      }}
    >
      <KebabIcon />
      {menuItems && menuItems.length > 0 ? (
        <S.PopupBox isOpen={isOpenPopup}>
          {menuItems.map((menuItem, index) => (
            <S.PopupItemButton onClick={menuItem.onClick} key={index}>
              <S.MenuText>{menuItem.showText}</S.MenuText>
            </S.PopupItemButton>
          ))}
        </S.PopupBox>
      ) : null}
    </S.Box>
  );
}
