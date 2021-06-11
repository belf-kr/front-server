import { useState } from "react";

import { default as S } from "./style";

import nomalRightArrow from "../../assets/icons/nomalRightArrow";

type DayOfWeek = {
  id: number;
  name: string;
  isChecked: boolean;
};

function DetailSelection(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [dayOfWeekList, setDayOfWeekList] = useState<DayOfWeek[]>([
    {
      id: 0,
      name: "일",
      isChecked: false,
    },
    {
      id: 1,
      name: "월",
      isChecked: false,
    },
    {
      id: 2,
      name: "화",
      isChecked: false,
    },
    {
      id: 3,
      name: "수",
      isChecked: false,
    },
    {
      id: 4,
      name: "목",
      isChecked: false,
    },
    {
      id: 5,
      name: "금",
      isChecked: false,
    },
    {
      id: 6,
      name: "토",
      isChecked: false,
    },
  ]);

  const [currentRepeat, setCurrentRepeat] = useState<string>("반복 안함");

  const onClickDayOfWeek = (id: number) => {
    const index = dayOfWeekList.findIndex((e) => e.id == id);
    const newArr = [...dayOfWeekList];
    newArr[index].isChecked = !newArr[index].isChecked;
    setDayOfWeekList(newArr);

    const repeatArr = dayOfWeekList.filter((e: DayOfWeek) => e.isChecked).map((e: DayOfWeek) => e.name);
    setCurrentRepeat(repeatArr.length === 7 ? "매일" : repeatArr.toString());
  };

  return (
    <S.Frame>
      <S.DetailCardButton onClick={() => setIsOpen(!isOpen)}>
        <div>Detail</div>
        <div>
          <S.SelectedDayOfWeek>{currentRepeat}</S.SelectedDayOfWeek>
        </div>
        <S.DetailCardIcon isOpen={isOpen}>
          <S.Icon {...nomalRightArrow}>
            <path d={nomalRightArrow.d} />
          </S.Icon>
        </S.DetailCardIcon>
      </S.DetailCardButton>
      <S.DetailDialog isOpen={isOpen}>
        <S.WeekSelectionCard>
          {dayOfWeekList.map((element: DayOfWeek, index: number) => (
            <S.DayOfWeekButton
              key={element.id}
              isChecked={element.isChecked}
              onClick={() => {
                onClickDayOfWeek(index);
              }}
            >
              <S.DayOfWeekCheck isChecked={element.isChecked}>{element.name}</S.DayOfWeekCheck>
            </S.DayOfWeekButton>
          ))}
        </S.WeekSelectionCard>
      </S.DetailDialog>
    </S.Frame>
  );
}
export default DetailSelection;
