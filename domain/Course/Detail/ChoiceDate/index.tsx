import { useState } from "react";

import * as S from "./style";

const getDateList = (currentDate) => {
  return Array(10)
    .fill(null)
    .map((_date, i) => {
      const t = new Date(currentDate);
      t.setDate(currentDate.getDate() + i - 2);
      return t;
    });
};

const getDayofWeek = (date) => {
  return new Intl.DateTimeFormat("ko-KR", { weekday: "long" }).format(date).replace("요일", "");
};

export default function ChoiceDate(): JSX.Element {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(Date.now()));
  const [dateList, setDateList] = useState<Date[]>(getDateList(currentDate));

  return (
    <S.Box>
      <S.YearMonthBox>
        <a>
          {currentDate.getFullYear()}/{currentDate.getMonth() + 1}
        </a>
      </S.YearMonthBox>
      {dateList.map((date, index) => (
        <S.DayBox
          key={"Date_" + index}
          isCurrent={currentDate.getTime() === date.getTime()}
          onClick={() => {
            setCurrentDate(date);
            setDateList(getDateList(date));
          }}
        >
          <S.DayFlexBox>
            <a>{date.getDate()}</a>
            <a>{getDayofWeek(date)}</a>
          </S.DayFlexBox>
        </S.DayBox>
      ))}
    </S.Box>
  );
}
