import React from "react";

import SearchIcon from "../../icons/SearchIcon";

import * as S from "./style";

export default function SearchInput(): JSX.Element {
  return (
    <S.Card>
      <S.Box>
        <S.IconArea>
          <SearchIcon size="xSmall" />
        </S.IconArea>
        <form>
          <S.Input type="text" placeholder="검색" />
          <input type="submit" style={{ visibility: "collapse" }} />
        </form>
      </S.Box>
    </S.Card>
  );
}
