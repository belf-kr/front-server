import router from "next/router";
import React, { useEffect, useRef, useState } from "react";

import SearchIcon from "../../icons/SearchIcon";

import * as S from "./style";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

export default function SearchInput(): JSX.Element {
  const [query, setQuery] = useState("");

  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const modalEl = useRef<HTMLDivElement>(null);

  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: "/search",
      query: { q: query },
    });
  });

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
    <S.Card ref={modalEl}>
      <S.Box>
        <S.IconArea
          onClick={(e) => {
            e.stopPropagation();
            setIsOpenPopup(!isOpenPopup);
          }}
        >
          <SearchIcon size="xSmall" />
        </S.IconArea>
        <S.PopupBox isOpen={isOpenPopup}>
          <form onSubmit={handleSubmit}>
            <S.Input type="text" placeholder="검색" name="q" value={query} onChange={handleParam(setQuery)} />
          </form>
        </S.PopupBox>
      </S.Box>
    </S.Card>
  );
}
