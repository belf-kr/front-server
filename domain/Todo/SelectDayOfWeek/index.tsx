import { useEffect, useRef, useState } from "react";

import * as S from "./style";

import ArrowIcon from "../../../icons/ArrowIcon";

type DayOfWeek = {
  showText: string;
  number: number;
  isChecked?: boolean;
};

type props = {
  dayOfWeekOnChange?: (value: boolean[]) => void;
};

export default function SelectDayOfWeek({ dayOfWeekOnChange }: props): JSX.Element {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [dayOfWeekItems] = useState<DayOfWeek[]>([
    { showText: "월", number: 0 },
    { showText: "화", number: 1 },
    { showText: "수", number: 2 },
    { showText: "목", number: 3 },
    { showText: "금", number: 4 },
    { showText: "토", number: 5 },
    { showText: "일", number: 6 },
  ]);

  const [currentDayOfWeekItems, setCurrentDayOfWeekItems] = useState<boolean[]>([false, false, false, false, false, false, false]);

  const modalEl = useRef<HTMLDivElement>(null);

  const handleClickOutside = ({ target }: any) => {
    if (modalEl.current) {
      if (!modalEl.current?.contains(target)) {
        setIsOpenPopup(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dayOfWeekOnChange) dayOfWeekOnChange(currentDayOfWeekItems);
  }, [currentDayOfWeekItems]);

  return (
    <S.SelectDayOfWeekBox ref={modalEl}>
      <S.SelectDayOfWeekInfoBox
        onClick={() => {
          setIsOpenPopup(!isOpenPopup);
        }}
      >
        <S.TitleLabel>요일</S.TitleLabel>
        <S.DayOfWeekLabelBox>
          <S.DayOfWeekLabel>
            {dayOfWeekItems
              .filter((dayOfWeek) => currentDayOfWeekItems[dayOfWeek.number])
              .map((dayOfWeek) => dayOfWeek.showText)
              .join(" ")}
          </S.DayOfWeekLabel>
        </S.DayOfWeekLabelBox>
        <S.IconBox isOpen={isOpenPopup}>
          <ArrowIcon size={"x2Small"} />
        </S.IconBox>
      </S.SelectDayOfWeekInfoBox>
      <S.DayOfWeekListBox isOpen={isOpenPopup}>
        {dayOfWeekItems.map((dayOfWeek, index) => {
          return (
            <S.ButtonBox
              key={index}
              onClick={() => {
                const temp = { ...currentDayOfWeekItems };
                temp[index] = !temp[index];
                setCurrentDayOfWeekItems(temp);
              }}
              isChecked={currentDayOfWeekItems[index]}
            >
              <S.DayOfWeekbuttonBox>
                <S.DayOfWeekLabel>{dayOfWeek.showText}</S.DayOfWeekLabel>
              </S.DayOfWeekbuttonBox>
            </S.ButtonBox>
          );
        })}
      </S.DayOfWeekListBox>
    </S.SelectDayOfWeekBox>
  );
}
